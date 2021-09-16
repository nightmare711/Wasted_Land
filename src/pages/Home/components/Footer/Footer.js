import React from 'react'
import Border from 'assets/home/border.png'
import Logo from 'assets/home/footer_logo.png'
import PartnerBG from 'assets/home/bg_partner.png'
import TelegramIcon from 'assets/home/telegram__icon.png'
import DiscordIcon from 'assets/home/discord__icon.png'
import TwitterIcon from 'assets/home/twitter__icon.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FooterCharacters from 'assets/home/footer-characters.png'
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
							<img src={PartnerBG} alt='BG Partner' />
						</div>
					</div>
					<img src={Border} alt='Border' className='border__img' />
				</div>
				<div className=' footer-question'>
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
						<img src={FooterCharacters} alt='Footer Characters' className='footer__characters' />
					</div>
				</div>
				<div className='footer-social__container'>
					<div className='footer-social items=center justify-center'>
						<div className='part part__1'>
							<img className='logo' src={Logo} alt='Logo' />
							<span className='content'>Copyright © 2021 Wasted Lands</span>
						</div>
						<div className='part part__2'>
							<span className='title'>Contact</span>
							<span className='content'>contact@wastedland.com</span>
						</div>
						<div className='flex flex-row container-social__2'>
							<div className='part part__3'>
								<span className='title'>About Us</span>
								<a className='content' href='/'>
									Our Team
								</a>
								<a className='content' href='/'>
									Wasted Token
								</a>
								<a className='content' href='/'>
									White Paper
								</a>
							</div>
							<div className='part part__4'>
								<span className='title'>Social</span>
								<a className='content' href='/'>
									<img src={TelegramIcon} alt='Telegram icon' /> Telegram
								</a>
								<a className='content' href='/'>
									<img src={DiscordIcon} alt='Telegram icon' /> Discord
								</a>
								<a className='content' href='/'>
									<img src={TwitterIcon} alt='Telegram icon' /> Twitter
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
