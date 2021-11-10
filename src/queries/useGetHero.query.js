import { TEST_API } from 'constants/api'
import { useQuery } from 'react-query'
export const useGetPlayerHero = (address) => {
	return useQuery('useGetPlayerHero', () => {
		return fetch(TEST_API + `/api/v1//hero/own_by?owner=${address}`)
			.then((res) => res.json())
			.then((result) => {
				return result.data
			})
	})
}
export const useGetHero = (heroid) => {
	return useQuery('useGetHero', () => {
		return fetch(TEST_API + `/api/v1//hero/get?hero_id=${heroid}`)
			.then((res) => res.json())
			.then((result) => {
				return result.data
			})
	})
}
