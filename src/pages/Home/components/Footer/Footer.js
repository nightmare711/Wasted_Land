import React from 'react'
import Border from 'assets/home/border.png'
import PartnerBG from 'assets/home/bg_partner.png'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FooterCharacters from 'assets/home/footer-characters.png'
import PartnerBG_1 from 'assets/home/bg_partner_1.png'
import './Footer.css'

// const onChangeAttStyle = (id, height) => {
// 	const root = document.querySelector(`#${id}`)
// 	const iconComponent = document.querySelector(`#${id} .icon`)
// 	if (root) {
// 		if (parseFloat(root.style.height) !== parseFloat(height)) {
// 			root.style.height = `${height}px`
// 			iconComponent.style.transform = 'rotate(180deg)'
// 		} else {
// 			root.style.height = '40px'
// 			iconComponent.style.transform = 'rotate(0deg)'
// 		}
// 	} else {
// 		alert('Something went wrong!')
// 	}
// }

export const Footer = () => {
	return (
		<div className='section'>
			<div className='footer-section'>
				<div className='flex flex-col items-center justify-center footer__partner'>
					<div className='relative flex flex-col items-center justify-center w-full h-full max-w-screen-xl '>
						<span className='title'>Our Partner</span>
						<div className='partner'>
							<img className='partner__overlay' src={PartnerBG_1} alt='Partner' />
							<img src={PartnerBG} alt='BG Partner' />
							<div className='coming'>Coming soon</div>
						</div>
					</div>
					<img src={Border} alt='Border' className='border__img' />
				</div>
				<div className='footer-question'>
					<div className='flex flex-col items-start justify-start max-w-screen-xl'>
						<div className='footer__characters'>
							<div className='character__content'>
								<span className='glitch' data-text='GET YOUR CHARACTERS NOW'>
									GET YOUR CHARACTERS NOW
								</span>
								<div className='btn-primary'>Go to Marketplace</div>
							</div>
							<img className='bg__character' src={FooterCharacters} alt='Footer Characters' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
