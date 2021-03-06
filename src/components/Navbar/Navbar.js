import React from 'react'
import { onMoveAnimation, onTriggerMenu } from 'services/useDevelopUI'
import { useCheckAccountActive } from 'services/useWalletProvider'
import { useGetBalance } from 'services/useGetBalance'
import Btn_Hover from 'assets/home/btn-primary-hover.png'
import MenuIcon from '@material-ui/icons/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link } from 'react-router-dom'
import Logo from 'assets/logo.png'
import './Navbar.css'

export const Navbar = () => {
	const account = useCheckAccountActive()
	const balance = useGetBalance()
	return (
		<div className='navbar'>
			<div className='max-w-screen-xl container-md'>
				<div className='container-left'>
					<Link to='/'>
						<img src={Logo} alt='logo' />
					</Link>
					<ul className='list-nav'>
						<li className='nav-link'>
							<Link to='/buy-token'>Buy $WAL</Link>
						</li>
						<li className='nav-link'>
							<Link to='/summon-warriors'>Summon Warriors</Link>
						</li>
						<li className='nav-link'>
							<Link to='/about-us'>About Us</Link>
						</li>
						{/* <li>

							<Link to='/about-us'>Gallery</Link>
						</li> */}
						<li className='nav-link'>
							<span>
								More <KeyboardArrowDownIcon />
							</span>
							<div className='nav-hover'>
								<ul>
									<li
										onClick={() =>
											window.open('https://the-wasted-lands.gitbook.io/the-wasted-lands/', '_blank')
										}
									>
										Gitbook
									</li>
									<Link to='/white-paper'>
										<li>White paper</li>
									</Link>
									<Link to='/gallery'>
										<li>Gallery</li>
									</Link>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div className='flex flex-row items-center justify-center'>
					{!account ? (
						<div
							onClick={() => onMoveAnimation('connect-modal', 'moveInOpacity')}
							className='cursor-pointer btn-primary'
						>
							<div className='btn-primary_hover'>
								<img src={Btn_Hover} alt='Shadow' />
							</div>
							Connect Wallet
						</div>
					) : (
						<div
							onClick={() => onMoveAnimation('account-info', 'moveInOpacity')}
							style={{ backgroundColor: '#2A2A2D' }}
							className='flex flex-row items-center justify-center px-6 py-2 rounded-full cursor-pointer profile'
						>
							<div className='flex flex-row items-center justify-center mr-4'>
								<span className='mr-2'>{parseFloat(balance).toFixed(2)}</span>
								<img
									className='bnb-logo'
									src='https://faraland.io/static/media/bnb.da97f83e.svg'
									alt='Binance'
								/>
							</div>
							<span>
								{account?.length !== 0
									? account.substr(0, 8) +
									  '...' +
									  account.substr(account.length - 8, account.length)
									: 'No account selected'}
							</span>
						</div>
					)}
					<MenuIcon onClick={() => onTriggerMenu()} className='icon-menu-bar' />
				</div>
			</div>
		</div>
	)
}
