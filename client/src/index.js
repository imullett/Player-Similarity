import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Search from './pages/Search'
import {
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from '@mui/material/styles'
import { BrowserRouter, Route, Link, useParams, Routes } from 'react-router-dom'
import Landing from './pages/Landing'

let theme = createTheme({
	typography: {
		fontFamily: 'DM Serif Display',
	},
})

theme = responsiveFontSizes(theme)

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path=":id/:year" element={<Search />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
