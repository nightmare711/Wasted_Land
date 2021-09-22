import React from 'react'
import Line from 'assets/home/line.png'
import Time1 from 'assets/home/timeline_1.png'
import Time2 from 'assets/home/timeline_2.png'
import Time3 from 'assets/home/timeline_3.png'
import Time4 from 'assets/home/timeline_4.png'
import Active from 'assets/home/Active.png'
import Line2 from 'assets/home/Line_2.png'
import Inactive from 'assets/home/Inactive.png'
import { AnimationWithoutMobile } from 'components'

import './Description.css'

export const DescriptionSection = () => {
	const [active, setActive] = React.useState(1)
	const onChangeActive = (id) => {
		const root = document.querySelector(`.description-section .container-img__text__${id} img`)
		const prevRoot = document.querySelector(
			`.description-section .container-img__text__${active} img`
		)
		try {
			root.style.filter = 'grayscale(0%)'
			root.style.transform = 'scale(1.1)'
			root.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
			prevRoot.style.transform = 'scale(1)'
			prevRoot.style.boxShadow = 'none'
			setActive(id)
		} catch (err) {}
	}
	return (
		<div className='justify-center description-section'>
			<AnimationWithoutMobile delay={300} animateIn='animate__fadeIn'>
				<div className='flex items-center justify-center w-full h-full max-w-screen-xl'>
					<div className='flex flex-row w-full h-full container__max-w '>
						<div className='flex items-center justify-center left-side'>
							<div className='flex flex-col time-line'>
								{active >= 1 ? (
									<img
										onClick={() => onChangeActive(1)}
										src={Active}
										alt='active-icon'
										className='cursor-pointer icon icon-1'
									/>
								) : (
									<img
										onClick={() => onChangeActive(1)}
										src={Inactive}
										alt='active-icon'
										className='cursor-pointer icon icon-1'
									/>
								)}
								{active >= 2 ? (
									<img
										onClick={() => onChangeActive(2)}
										src={Active}
										alt='active-icon'
										className='cursor-pointer icon icon-2'
									/>
								) : (
									<img
										onClick={() => onChangeActive(2)}
										src={Inactive}
										alt='active-icon'
										className='cursor-pointer icon icon-2'
									/>
								)}
								{active >= 3 ? (
									<img
										onClick={() => onChangeActive(3)}
										src={Active}
										alt='active-icon'
										className='cursor-pointer icon icon-3'
									/>
								) : (
									<img
										onClick={() => onChangeActive(3)}
										src={Inactive}
										alt='active-icon'
										className='cursor-pointer icon icon-3'
									/>
								)}
								{active >= 4 ? (
									<img
										onClick={() => onChangeActive(4)}
										src={Active}
										alt='active-icon'
										className='cursor-pointer icon icon-4'
									/>
								) : (
									<img
										onClick={() => onChangeActive(4)}
										src={Inactive}
										alt='active-icon'
										className='cursor-pointer icon icon-4'
									/>
								)}
								<img src={Line2} alt='Line 2' className='line__2' />
							</div>
						</div>
						<div className='flex flex-col items-center justify-center h-full main-frame'>
							<div className='flex flex-row items-center justify-center timeline-container'>
								<div className='number-page'>
									<div className='number-page__border'>{active}</div>
								</div>
								<img src={Line} alt='Line' />
								<span>Timeline</span>
							</div>
							<div className='flex flex-row mt-20 mb-20 container-img'>
								<div
									onClick={() => onChangeActive(1)}
									className='relative container-img__text container-img__text__1'
								>
									<img src={Time1} alt='time-1' className='time-1' />
									{active === 1 ? <span>2059</span> : null}
								</div>
								<div
									onClick={() => onChangeActive(2)}
									className='relative container-img__text container-img__text__2'
								>
									<img src={Time2} alt='time-2' className='time-2' />
									{active === 2 ? <span>2061</span> : null}
								</div>
								<div
									onClick={() => onChangeActive(3)}
									className='relative container-img__text container-img__text__3'
								>
									<img src={Time3} alt='time-3' className='time-3' />
									{active === 3 ? <span>2062</span> : null}
								</div>
								<div
									onClick={() => onChangeActive(4)}
									className='relative container-img__text container-img__text__4'
								>
									<img src={Time4} alt='time-4' className='time-4' />
									{active === 4 ? <span>2072</span> : null}
								</div>
							</div>
							{active === 1 ? (
								<div id={'main-frame__content-1'} className='main-frame__content'>
									<div className='mainframe__title'>2059: The Invention</div>
									<div className='mt-6 expand-content'>
										Scientists from 4W, the strongest terrorist organization, had successfully
										invented a way of creating human mutation through the impact of a virus. 4W
										wanted to apply this technology to create a new human race, superior in
										intelligence, physicality, and even supernatural abilities.
									</div>
								</div>
							) : null}
							{active === 2 ? (
								<div id={'main-frame__content-2'} className='main-frame__content'>
									<div className='mainframe__title'>2061: The Purge</div>
									<div className='mt-6 expand-content'>
										Backers of 4W were leaders of many powerful countries at that time, who had the
										same extreme thoughts about The Purge, a massive wipeout of mankind. They argue
										that The Purge is the only and radical way to recreate the ecosystem. Only
										individuals that adapt to the virus will survive. With its exclusive vaccine, 4W
										can re-establish the world and rule it in its own way.
									</div>
								</div>
							) : null}
							{active === 3 ? (
								<div id={'main-frame__content-3'} className='main-frame__content'>
									<div className='mainframe__title'>2062: The Pandemic</div>
									<div className='mt-6 expand-content'>
										In early 2062, 4W released the virus into the atmosphere, making it the worst
										epidemic of all time. In just a few weeks, the defense systems of many countries
										quickly collapsed. The world fell into chaos. Reports of hybrids began to
										appear. Those were half human half animals with superior speed and physical
										strength but their consciousness and intelligence were impaired.
									</div>
								</div>
							) : null}
							{active === 4 ? (
								<div id={'main-frame__content-4'} className='main-frame__content'>
									<div className='mainframe__title'>2072: The New Order</div>
									<div className='mt-6 expand-content'>
										Now, 10 years after the chaos, the world is completely divided, the cities are
										abandoned. The world is divided into 3 main groups. Survivors: Pure humans, not
										affected by the virus, forming new communities. Hybrids: Half humans - half
										animals, adapted to the virus. Ex-Company: Vaccinated humans, high-tech, the
										biggest community.
									</div>
								</div>
							) : null}
						</div>
						<div className='flex items-center justify-center right-side bg-text'>
							{active === 1 ? <span className='bg-text__1'>INVENTION</span> : null}
							{active === 2 ? <span className='bg-text__2'>THEPURGE</span> : null}
							{active === 3 ? <span className='bg-text__3'>PANDEMIC</span> : null}
							{active === 4 ? <span className='bg-text__4'>NEWORDER</span> : null}
						</div>
					</div>
				</div>
			</AnimationWithoutMobile>
		</div>
	)
}
