import { Divider, Grid } from '@mui/material'
import { Typography } from '@mui/material'
import '../index.css'
import React from 'react'

const Similar = (props) => {
	const [comps, setComps] = React.useState([])

	const fetchComps = async () => {
		const response = await fetch(
			`http://localhost:5555/comps/${props.id}/${props.year}`
		)
		const data = await response.json()

		setComps(data)
	}

	React.useEffect(() => {
		fetchComps()
	}, [])

	return (
		<>
			<Divider />
			{comps.map((p, index) => (
				<div key={index}>
					<Grid
						container
						alignItems="center"
						justifyContent="center"
						align="center"
					>
						<Grid item xs={4.5}>
							<Typography variant="h4" align="left">
								{p.player}
							</Typography>
							<Typography variant="body1" align="left">
								{p.year + ' | ' + p.team + ' | ' + p.pos}
							</Typography>
						</Grid>
						<Grid item xs={1.5}>
							<Typography variant="h4">
								{(p.distance * 100)?.toFixed(0) + '%'}
							</Typography>
							<Typography variant="body1">{'similar'}</Typography>
						</Grid>
						<Grid item xs={1.5}>
							<Typography variant="h4">{p.pts?.toFixed(1)}</Typography>
							<Typography variant="body1">{'pts'}</Typography>
						</Grid>
						<Grid item xs={1.5}>
							<Typography variant="h4">{p.trb?.toFixed(1)}</Typography>
							<Typography variant="body1">{'trb'}</Typography>
						</Grid>
						<Grid item xs={1.5}>
							<Typography variant="h4">{p.ast?.toFixed(1)}</Typography>
							<Typography variant="body1">{'ast'}</Typography>
						</Grid>
						<Grid item xs={1.5}>
							<Typography variant="h4" align="center">
								{p.WS?.toFixed(1)}
							</Typography>
							<Typography variant="body1">{'ws'}</Typography>
						</Grid>
					</Grid>
					<Divider />
				</div>
			))}
		</>
	)
}
export default Similar
