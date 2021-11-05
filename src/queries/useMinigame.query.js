import React from 'react'
import { useQuery } from 'react-query'
import { TEST_API } from 'constants/api'

export const useGetMinigameData = () => {
	return useQuery('useGetMinigameData', () => {
		return fetch(TEST_API + '/api/v1/minigame/data')
			.then((res) => res.json())
			.then((result) => {
				return result.data
			}, {})
	})
}

export const useGetPlayerData = (address) => {
	return useQuery('useGetPlayerData', () => {
		return fetch(TEST_API + `/api/v1/minigame/player_data?address=${address}`)
			.then((res) => res.json())
			.then((result) => {
				return result.data
			})
	})
}

export const useGetRerollMission = (address) => {
	fetch(TEST_API + `/api/v1/minigame/reroll?address=${address}`)
		.then((response) => response.json())
		.then((data) => {
			return data.data
		})
		.catch((err) => console.error(err))
}
