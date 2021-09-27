import React from 'react'
import Border from 'assets/home/border.png'
import PartnerBG from 'assets/home/bg_partner.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FooterCharacters from 'assets/home/footer-characters.png'
import PartnerBG_1 from 'assets/home/bg_partner_1.png'
import './Footer.css'

const onChangeAttStyle = (id, height) => {
	const root = document.querySelector(`#${id}`)
	const iconComponent = document.querySelector(`#${id} .icon`)
	if (root) {
		if (parseFloat(root.style.height) !== parseFloat(height)) {
			root.style.height = `${height}px`
			iconComponent.style.transform = 'rotate(180deg)'
		} else {
			root.style.height = '40px'
			iconComponent.style.transform = 'rotate(0deg)'
		}
	} else {
		alert('Something went wrong!')
	}
}

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
						</div>
					</div>
					<img src={Border} alt='Border' className='border__img' />
				</div>
				<div className='footer-question'>
					<div className='flex flex-col items-start justify-start max-w-screen-xl'>
						<div className='title__container'>
							<span className='title'>FAQ</span>
							<span className='title__expand'>
								Frequently asked questions and answers about the project
							</span>
						</div>
						<div
							onClick={() => onChangeAttStyle('question__1', 92)}
							id={'question__1'}
							className='questions__container'
						>
							<div className='question__title '>
								<span>Can I buy all characters in Wasted Land?</span>
								<ExpandMoreIcon className='icon' />
							</div>
							<div className='question__content'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</div>
						</div>
						<div
							onClick={() => onChangeAttStyle('question__2', 92)}
							id={'question__2'}
							className='questions__container'
						>
							<div className='question__title'>
								<span>Can I buy all characters in Wasted Land?</span>
								<ExpandMoreIcon className='icon' />
							</div>
							<div className='question__content'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</div>
						</div>
						<div
							onClick={() => onChangeAttStyle('question__3', 92)}
							id={'question__3'}
							className='questions__container'
						>
							<div className='question__title'>
								<span>Can I buy all characters in Wasted Land?</span>
								<ExpandMoreIcon className='icon' />
							</div>
							<div className='question__content'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</div>
						</div>
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
