import React from 'react'
import { useQuery, useMutation } from 'react-query'
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
export const useGetPlayerHero = (address) => {
	return useQuery('useGetPlayerHero', () => {
		return fetch(TEST_API + `/api/v1//hero/own_by?owner=${address}`)
			.then((res) => res.json())
			.then((result) => {
				return result.data
			})
	})
}

export const useGetCitySlots = (cityId, slotSize, slotPage) => {
	return useQuery('useGetCitySlots', () => {
		return fetch(
			TEST_API + `/api/v1//minigame/city_slots/${cityId}?size=${slotSize}&page=${slotPage}`
		)
			.then((res) => res.json())
			.then((result) => {
				return result.data
			})
	})
}

// export const useGetRerollMission = (address) => {
// 	return useMutation((address) => {
// 		return fetch(TEST_API + `/api/v1/minigame/player_data?address=${address}`)
// 			.then((res) => res.json())
// 			.then((result) => {
// 				return result.data
// 			})
// 	})
// }
