import React from 'react'
import Logo from 'assets/home/footer_logo.png'
import FooterBorder from 'assets/footer_border.png'
import TelegramIcon from 'assets/home/telegram__icon.png'
import DiscordIcon from 'assets/home/discord__icon.png'
import TwitterIcon from 'assets/home/twitter__icon.png'

export const Footer = () => {
	return (
		<div className=''>
			<div className='footer-social__container'>
				<img className='footer__border' src={FooterBorder} alt='Border' />
				<div className='footer-social items=center justify-center'>
					<div className='part part__1'>
						<img className='logo' src={Logo} alt='Logo' />
						<span className='content'>Copyright © 2021 Wasted Lands</span>
					</div>
					<div className='part part__2'>
						<span className='title'>Contact</span>
						<span className='content'>contact@thewastedlands.io</span>
					</div>
					<div className='flex flex-row container-social__2'>
						<div className='part part__3'>
							<span className='title'>About Us</span>
							<a className='content' href='/'>
								Our Team
							</a>
							<a className='content' href='/'>
								WAL Token
							</a>
							<a className='content' href='/'>
								White Paper
							</a>
						</div>
						<div className='part part__4'>
							<span className='title'>Social</span>
							<a
								className='content'
								target='_blank'
								rel='noreferrer'
								href='https://t.me/TheWastedLands'
							>
								<img src={TelegramIcon} alt='Telegram icon' /> Telegram
							</a>
							<a
								className='content'
								target='_blank'
								rel='noreferrer'
								href='https://discord.gg/aNPsuZb4Br'
							>
								<img src={DiscordIcon} alt='Telegram icon' /> Discord
							</a>
							<a
								target='_blank'
								rel='noreferrer'
								className='content'
								href='https://twitter.com/thewastedlands'
							>
								<img src={TwitterIcon} alt='Telegram icon' /> Twitter
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
