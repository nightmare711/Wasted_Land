import React, { useState } from 'react'
import './SelectFight.css'
import { onMoveAnimation } from 'services/useDevelopUI'
import PlateSlot from 'pages/Minigame/components/PlateSlot'
import { useGetCitySlots } from 'queries/useMinigame.query'

/**
 * @author
 * @function SelectFight
 **/

export const SelectFight = (props) => {
	const [wherePoint, setWherePoint] = useState(1)
	const [currentPage, setCurrentPage] = useState(0)
	const { activeCity } = props
	const {
		data: cityListSlot,
		isSuccess: getCiTyListSuccess,
		refetch: refetchCitySlot,
	} = useGetCitySlots(activeCity, '6', [currentPage])
	React.useEffect(() => {
		refetchCitySlot()
		setCurrentPage(0)
		setWherePoint(1)
	}, [activeCity])
	React.useEffect(() => {
		refetchCitySlot()
	}, [currentPage])
	return (
		<div className='selectfight-screen  justify-center items-center relative'>
			<div className='selectfight-container grid'>
				<div
					className='btn-primary-minigame fixed top-5 left-5 btn-prev'
					onClick={() => {
						onMoveAnimation('overlay-selectfightscreen', 'moveOutOpacity')
					}}
				></div>
				{getCiTyListSuccess
					? cityListSlot.slots.map((slot, key) => {
							return (
								<div key={key} className='selectfight-plate relative flex flex-col items-center'>
									<div className='plate-top flex justify-around w-full p-5 h-3/4'>
										<div className=' flex flex-col justify-between'>
											<div className='selectfight-iconslot'>
												<div className='flex flex-col items-center justify-center h-full'>
													<span className='selectfight-slottiltle text-yellow-100'>SLOT</span>
													<span className='selectfight-slot text-white'>{slot.id}</span>
												</div>
											</div>
											<div className='btn-primary-minigame btn-fight'></div>
										</div>
										<div className='flex justify-between h-full'>
											<PlateSlot />
											<PlateSlot />
											<PlateSlot />
										</div>
									</div>
									<div className='plate-bottom flex justify-between items-center text-white'>
										<div className=''>PROTECTED:88H88M</div>
										<div className=''>USER ADDRESS: 123213213213...1232132132</div>
									</div>
								</div>
							)
					  })
					: null}
			</div>
			<div className='selectfight-pagination absolute flex justify-between'>
				<div className='left-control flex'>
					<div
						className='btn-primary-minigame btn-prevend-page'
						onClick={() => {
							setCurrentPage(0)
							setWherePoint(1)
						}}
					></div>
					<div
						className='btn-primary-minigame btn-prev-page'
						onClick={() => {
							setCurrentPage((old) => Math.max(old - 1, 0))
							console.log('current', currentPage)
							setWherePoint((old) => Math.max(old - 1, 1))
						}}
					></div>
				</div>
				<div className='selectfight-page flex justify-between items-center w-1/4'>
					<div className={'flex flex-col items-center ' + (wherePoint === 1 ? 'page-active' : '')}>
						<div className='page-icon'></div>
						<span className='text-gray-400'>{currentPage + 2 - wherePoint}</span>
					</div>
					<div className={'flex flex-col items-center ' + (wherePoint === 2 ? 'page-active' : '')}>
						<div className='page-icon'></div>
						<span className='text-gray-400'>{currentPage + 3 - wherePoint}</span>
					</div>
					<div className={'flex flex-col items-center ' + (wherePoint === 3 ? 'page-active' : '')}>
						<div className='page-icon'></div>
						<span className='text-gray-400'>{currentPage + 4 - wherePoint}</span>
					</div>
				</div>
				<div className='right-control flex'>
					<div
						className='btn-primary-minigame btn-next-page items-center'
						onClick={() => {
							setCurrentPage((old) => Math.min(old + 1, Math.ceil(cityListSlot.total / 6)))
							console.log('current', currentPage)
							setWherePoint((old) => Math.min(old + 1, 3))
						}}
					></div>
					<div
						className='btn-primary-minigame btn-nextend-page'
						onClick={() => {
							setCurrentPage(Math.ceil(cityListSlot.total / 6))
							console.log('current', currentPage)
							setWherePoint(3)
						}}
					></div>
				</div>
			</div>
		</div>
	)
}
export default SelectFight
