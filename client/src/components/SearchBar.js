import React from 'react'
import { InputAdornment, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const handleSubmit = (e) => {
	e.preventDefault()
	alert(e.target.elements.search.value)
}

const SearchBar = () => {
	return (
		<form onSubmit={handleSubmit}>
			<TextField
				id="search"
				label="Search for player comps..."
				type="search"
				fullWidth
				InputProps={{
					endAdornment: (
						<InputAdornment>
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</form>
	)
}

export default SearchBar
