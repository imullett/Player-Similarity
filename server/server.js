const express = require('express')
const { players, stats, sequelize } = require('./models')
const cors = require('cors')

const app = express()

players.hasMany(stats, { foreignKey: 'id' })
stats.belongsTo(players, { foreignKey: 'id' })

app.get('/players', async (req, res) => {
	try {
		const data = await players.findAll()
		res.send(data)
	} catch (e) {
		console.log(e)
		res.status(500).send(e)
	}
})

app.get('/stats/:id/:year', async (req, res) => {
	const id = req.params.id
	const year = req.params.year

	try {
		const player = await stats.findAll({
			where: {
				ID: id,
				Year: year,
			},
			include: [
				{
					model: players,
					required: true,
					attributes: [],
				},
			],
			raw: true,
			attributes: ['*', 'player.player'],
		})
		const comps = await queryComps(id, year)

		res.send({ player, comps })
	} catch (e) {
		console.log(e)
		res.status(500).json(e)
	}
})

app.listen({ port: 5555 }, () => {
	console.log('Server started at http://localhost:5555')
})

async function queryComps(id, year) {
	const comps = await sequelize.query(
		`SELECT players.id,
          players.player,
          stats.year,
          stats.pts,
          stats.mp,
          stats.ast,
          stats.trb,
          stats.ws * stats.mp / 36                                      AS WS,
          ( 1 / ( 1 + ( Sqrt(Power((input.pc1 - stats.pc1), 2)
                              + Power((input.pc2 - stats.pc2), 2)) ) ) ) AS distance
      FROM   stats
          INNER JOIN players
                  ON stats.id = players.id,
          (SELECT id,
                  pc1,
                  pc2
            FROM   stats
            WHERE  id = ${id}
                  AND year = ${year}) AS input
      WHERE  stats.id != input.id
      ORDER  BY distance DESC
      LIMIT  10;`,
		{
			type: sequelize.QueryTypes.SELECT,
		}
	)

	return comps
}
