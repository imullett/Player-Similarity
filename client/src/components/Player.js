import { Avatar, Box, Card, CardMedia, Grid } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'

let src =
	'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629630.png'

const Player = () => {
	return (
		<Grid container alignItems="center" justifyContent="center" align="center">
			<Grid item xs={8}>
				<img src={src} alt="player" />
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h4">{'Ja Morant 2015'}</Typography>
				<Typography variant="body1">{'MEM'}</Typography>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					align="center"
				>
					<Grid item xs={6} md={3}>
						<Typography variant="h4">{'26.4'}</Typography>
						<Typography variant="body1">{'pts'}</Typography>
					</Grid>
					<Grid item xs={6} md={3}>
						<Typography variant="h4">{'5.8'}</Typography>
						<Typography variant="body1">{'rbs'}</Typography>
					</Grid>
					<Grid item xs={6} md={3}>
						<Typography variant="h4">{'7.8'}</Typography>
						<Typography variant="body1">{'ast'}</Typography>
					</Grid>
					<Grid item xs={6} md={3}>
						<Typography variant="h4">{'20.8'}</Typography>
						<Typography variant="body1">{'ws'}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

src =
	'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629630.png'
export default Player
