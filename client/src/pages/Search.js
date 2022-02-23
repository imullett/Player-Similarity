import { Grid } from '@mui/material'
import React from 'react'
import Player from '../components/Player'
import Similar from '../components/Similar'

import PlayerSearch from '../components/PlayerSearch'
import { useParams } from 'react-router-dom'

const Search = () => {
	let id = useParams().id
	let year = useParams().year

	return (
		<Grid container alignItems="center" justifyContent="center">
			<Grid item xs={12} className="top">
				<PlayerSearch />
				<Grid item xs={12} lg={12}>
					<Player year={year} id={id} />
				</Grid>
			</Grid>
			<Grid item xs={12} lg={12} sx={{ ml: 2, mr: 2, mt: 1 }}>
				<Similar year={year} id={id} />
			</Grid>
		</Grid>
	)
}

export default Search
