import {
	Grid,
	Stack,
	Box,
	Paper,
	Container,
	Divider,
	Typography,
	Card,
} from '@mui/material'
import React from 'react'
import Player from '../components/Player'
import SearchBar from '../components/SearchBar'
import Similar from '../components/Similar'

import {
	createTheme,
	ThemeProvider,
	responsiveFontSizes,
} from '@mui/material/styles'

let theme = createTheme({
	components: {
		MuiTypography: {
			defaultProps: {
				fontFamily: 'DM Serif Display',
			},
		},
		MuiCard: {
			defaultProps: {
				variant: 'outlined',
				backgroundColor: 'green',
			},
		},
	},
})

theme = responsiveFontSizes(theme)

const Landing = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container sx={{ pt: 1 }}>
				<SearchBar />
				<Grid container>
					<Grid item xs={12} lg={12}>
						<Card>
							<Player />
						</Card>
					</Grid>
					<Typography variant="h4">Similar Seasons:</Typography>
					<Grid item xs={12} lg={12}>
						<Card>
							<Divider />
							<Similar />
							<Divider />
							<Similar />
							<Divider />
							<Similar />
							<Divider />
							<Similar />
							<Divider />
							<Similar />
							<Divider />
						</Card>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	)
}

export default Landing
