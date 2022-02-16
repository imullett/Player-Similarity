// material ui card
// avatar with text to the right

import { Card, Box, CardMedia, Grid } from '@mui/material'
import { Typography } from '@mui/material'
import {
	createTheme,
	ThemeProvider,
	responsiveFontSizes,
} from '@mui/material/styles'
import '../index.css'
import React from 'react'
const NBA = require('nba')

const theme = createTheme({
	components: {
		typography: {
			flexGrow: 1,
			textAlign: 'center',
		},
	},
})

const Similar = (player) => {
	return (
		<Grid container alignItems="center" justifyContent="center" align="center">
			<Grid item xs={4}>
				<Typography variant="h4">{'Ja Morant'}</Typography>
				<Typography variant="body1">{'2017 | MEM'}</Typography>
			</Grid>

			<Grid item xs={2} alignItems="center" justifyContent="center">
				<Typography variant="h4">{'26.4'}</Typography>
				<Typography variant="p">{'pts'}</Typography>
			</Grid>
			<Grid item xs={2} alignItems="center" justifyContent="center">
				<Typography variant="h4">{'5.8'}</Typography>
				<Typography variant="p">{'rbs'}</Typography>
			</Grid>
			<Grid item xs={2} alignItems="center" justifyContent="center">
				<Typography variant="h4">{'7.8'}</Typography>
				<Typography variant="p">{'ast'}</Typography>
			</Grid>
			<Grid item xs={2} alignItems="center" justifyContent="center">
				<Typography variant="h4" align="center">
					{'20.8'}
				</Typography>
				<Typography variant="body1">{'ws'}</Typography>
			</Grid>
		</Grid>
	)
}
export default Similar
