import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'

const Player = (props) => {
	const [p, setPlayer] = React.useState({})
	let src = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${props.id}.png`

	const fetchPlayer = async () => {
		const response = await fetch(
			`http://localhost:5555/player/${props.id}/${props.year}`
		)
		const data = await response.json()
		setPlayer(data[0])
	}

	React.useEffect(() => {
		fetchPlayer()
	}, [])

	return (
		<Grid container align="center">
			<Grid item xs={8}>
				<img src={src} alt="player" align="center" />
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h4">{p.player}</Typography>
				<Typography variant="body1">{p.Team + ' ' + p.Year}</Typography>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					align="center"
				>
					<Grid item xs={6} md={3}>
						<Typography variant="h4">{p.PTS?.toFixed(1)}</Typography>
						<Typography variant="body1">{'pts'}</Typography>
					</Grid>
					<Grid item xs={6} md={3}>
						<Typography variant="h4">{p.TRB?.toFixed(1)}</Typography>
						<Typography variant="body1">{'rbs'}</Typography>
					</Grid>
					<Grid item xs={6} md={3}>
						<Typography variant="h4">{p.AST?.toFixed(1)}</Typography>
						<Typography variant="body1">{'ast'}</Typography>
					</Grid>
					<Grid item xs={6} md={3}>
						<Typography variant="h4">{p.WS?.toFixed(1)}</Typography>
						<Typography variant="body1">{'ws'}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Player
