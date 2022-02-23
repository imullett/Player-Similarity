import { Autocomplete, TextField, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PlayerSearch = (props) => {
	const navigate = useNavigate()
	// List of players
	const [players, setPlayers] = useState([])
	// Selected player
	const [selectedPlayer, setSelectedPlayer] = useState(null)
	// All seasons for selected players
	const [seasons, setSeasons] = useState([])
	// Selected season
	const [selectedSeason, setSelectedSeason] = useState(null)
	// Year prompt enable/disable
	const [yearDisabled, setYearDisabled] = useState(true)
	// Player search input value
	const [inputValue, setInputValue] = useState('')

	const fetchResults = async () => {
		const response = await fetch(`http://localhost:5555/players`)
		const data = await response.json()

		setPlayers(data)
	}

	useEffect(() => {
		if (selectedPlayer) {
			const fetchSeason = async () => {
				console.log('selectedPlayer', selectedPlayer)
				const response = await fetch(
					`http://localhost:5555/player/${selectedPlayer.id}`
				)
				const data = await response.json()
				setSeasons(data)
			}

			fetchSeason()
		}
	}, [selectedPlayer])

	useEffect(() => {
		fetchResults()
	}, [])

	const handleClick = (e) => {
		navigate(`${selectedPlayer.id}/${selectedSeason.Year}`)
	}

	return (
		<>
			<Autocomplete
				id="player-search"
				getOptionLabel={(player) => player.player}
				options={players}
				loading={players.length === 0}
				sx={{ width: '100%' }}
				noOptionsText="No player found with that name"
				renderOption={(props, player) => (
					<Box component="li" {...props} key={player.id}>
						{player.player}
					</Box>
				)}
				value={selectedPlayer}
				isOptionEqualToValue={(option, value) => option.id === value.id}
				onChange={(e, value) => {
					setSelectedPlayer(value)
					setYearDisabled(false)
				}}
				onInputChange={(e) => {
					setInputValue(e.target.value)
					if (!yearDisabled) {
						setYearDisabled(true)
					}
				}}
				renderInput={(params) => (
					<TextField {...params} label="Search for a player" variant="filled" />
				)}
				open={inputValue.length > 2}
			></Autocomplete>

			<Autocomplete
				disabled={yearDisabled}
				id="season-search"
				getOptionLabel={(season) => String(season.Year)}
				options={seasons}
				sx={{ width: '100%' }}
				noOptionsText="No seasons found for that player"
				renderOption={(props, season) => (
					<Box component="li" {...props} key={season.Year}>
						{season.Year}
					</Box>
				)}
				value={selectedSeason}
				isOptionEqualToValue={(option, value) => option.Year === value.Year}
				onChange={(e, value) => setSelectedSeason(value)}
				renderInput={(params) => (
					<TextField {...params} label="Search for a season" variant="filled" />
				)}
			></Autocomplete>
			<button type="submit" onClick={handleClick}>
				Submit
			</button>
		</>
	)
}

export default PlayerSearch
