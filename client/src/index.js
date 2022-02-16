import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Landing from './pages/Landing'
import { createTheme } from '@mui/system'
import { ThemeProvider } from '@emotion/react'

const numberFont = createTheme({
	typography: {
		fontFamily: 'DM Serif Display',
	},
})

ReactDOM.render(
	<React.StrictMode>
		<Landing />
	</React.StrictMode>,
	document.getElementById('root')
)
