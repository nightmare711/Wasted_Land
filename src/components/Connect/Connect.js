import React from 'react'
import Metamask from 'assets/metamask.svg'
import WalletConnect from 'assets/walletconnect.svg'
import { onMoveAnimation } from 'services/useDevelopUI'
import { METAMASK, WALLETCONNECT } from 'constants/wallet'
import { useConnectWallet } from 'services/useWalletProvider'

export const Connect = () => {
	const onConnect = useConnectWallet()
	return (
		<div
			id='connect-modal'
			className='fixed inset-0 z-10 flex items-center justify-center invisible w-screen h-screen text-white opacity-0'
		>
			<div
				onClick={() => onMoveAnimation('connect-modal', 'moveOutOpacity')}
				className='overlay'
			></div>
			<div
				style={{ backgroundColor: '#2A2A2D', width: '400px', fontFamily: 'Montserrat' }}
				className='p-6 rounded-md connect-form'
			>
				<span className='font-semibold'>Select Network</span>
				<div className='flex flex-row mt-4 text-sm font-semibold'>
					<div className='flex flex-row items-center justify-center flex-1 mr-4 uppercase transition-all bg-gray-600 rounded-md cursor-pointer '>
						<img
							className='mr-2 w-7'
							src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%227.5in%22%20height%3D%227.5in%22%20version%3D%221.1%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%207500%207500%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20%20%20%20%20.fil0%20%7Bfill%3Anone%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil1%20%7Bfill%3A%23f0b90b%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil2%20%7Bfill%3A%23fff%7D%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Layer_x0020_1%22%3E%20%20%20%20%20%20%20%20%3Cmetadata%20id%3D%22CorelCorpID_0Corel-Layer%22%2F%3E%20%20%20%20%20%20%20%20%3Crect%20class%3D%22fil0%22%20width%3D%227500%22%20height%3D%227500%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22_2419820813232%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20class%3D%22fil1%22%20cx%3D%223750%22%20cy%3D%223750%22%20r%3D%223500%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil2%22%20d%3D%22M2779%203351l971%20-971%20971%20972%20565%20-565%20-1536%20-1537%20-1536%201536%20565%20565%200%200zm-1529%20399l565%20-565%20565%20565%20-565%20565%20-565%20-565zm1529%20399l971%20971%20971%20-972%20566%20565%200%200%20-1537%201537%20-1536%20-1536%20-1%20-1%20566%20-564%200%200zm2341%20-399l565%20-565%20565%20565%20-565%20565%20-565%20-565z%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil2%22%20d%3D%22M4380%203750l0%200%20-630%20-632%20-466%20467%200%200%20-54%2054%20-111%20111%20-1%201%201%201%20630%20630%20631%20-631%200%200%200%200%200%20-1zm0%200l0%200%200%200z%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3Cstyle%20xmlns%3D%22%22%3E%23yddContainer%7Bdisplay%3Ablock%3Bfont-family%3AMicrosoft%20YaHei%3Bposition%3Arelative%3Bwidth%3A100%25%3Bheight%3A100%25%3Btop%3A-4px%3Bleft%3A-4px%3Bfont-size%3A12px%3Bborder%3A1px%20solid%7D%23yddTop%7Bdisplay%3Ablock%3Bheight%3A22px%7D%23yddTopBorderlr%7Bdisplay%3Ablock%3Bposition%3Astatic%3Bheight%3A17px%3Bpadding%3A2px%2028px%3Bline-height%3A17px%3Bfont-size%3A12px%3Bcolor%3A%235079bb%3Bfont-weight%3Abold%3Bborder-style%3Anone%20solid%3Bborder-width%3A1px%7D%23yddTopBorderlr%20.ydd-sp%7Bposition%3Aabsolute%3Btop%3A2px%3Bheight%3A0%3Boverflow%3Ahidden%7D.ydd-icon%7Bleft%3A5px%3Bwidth%3A17px%3Bpadding%3A0px%200px%200px%200px%3Bpadding-top%3A17px%3Bbackground-position%3A-16px%20-44px%7D.ydd-close%7Bright%3A5px%3Bwidth%3A16px%3Bpadding-top%3A16px%3Bbackground-position%3Aleft%20-44px%7D%23yddKeyTitle%7Bfloat%3Aleft%3Btext-decoration%3Anone%7D%23yddMiddle%7Bdisplay%3Ablock%3Bmargin-bottom%3A10px%7D.ydd-tabs%7Bdisplay%3Ablock%3Bmargin%3A5px%200%3Bpadding%3A0%205px%3Bheight%3A18px%3Bborder-bottom%3A1px%20solid%7D.ydd-tab%7Bdisplay%3Ablock%3Bfloat%3Aleft%3Bheight%3A18px%3Bmargin%3A0%205px%20-1px%200%3Bpadding%3A0%204px%3Bline-height%3A18px%3Bborder%3A1px%20solid%3Bborder-bottom%3Anone%7D.ydd-trans-container%7Bdisplay%3Ablock%3Bline-height%3A160%25%7D.ydd-trans-container%20a%7Btext-decoration%3Anone%3B%7D%23yddBottom%7Bposition%3Aabsolute%3Bbottom%3A0%3Bleft%3A0%3Bwidth%3A100%25%3Bheight%3A22px%3Bline-height%3A22px%3Boverflow%3Ahidden%3Bbackground-position%3Aleft%20-22px%7D.ydd-padding010%7Bpadding%3A0%2010px%7D%23yddWrapper%7Bcolor%3A%23252525%3Bz-index%3A10001%3Bbackground%3Aurl%28chrome-extension%3A%2F%2Feopjamdnofihpioajgfdikhhbobonhbb%2Fab20.png%29%3B%7D%23yddContainer%7Bbackground%3A%23fff%3Bborder-color%3A%234b7598%7D%23yddTopBorderlr%7Bborder-color%3A%23f0f8fc%7D%23yddWrapper%20.ydd-sp%7Bbackground-image%3Aurl%28chrome-extension%3A%2F%2Feopjamdnofihpioajgfdikhhbobonhbb%2Fydd-sprite.png%29%7D%23yddWrapper%20a%2C%23yddWrapper%20a%3Ahover%2C%23yddWrapper%20a%3Avisited%7Bcolor%3A%2350799b%7D%23yddWrapper%20.ydd-tabs%7Bcolor%3A%23959595%7D.ydd-tabs%2C.ydd-tab%7Bbackground%3A%23fff%3Bborder-color%3A%23d5e7f3%7D%23yddBottom%7Bcolor%3A%23363636%7D%23yddWrapper%7Bmin-width%3A250px%3Bmax-width%3A400px%3B%7D%3C%2Fstyle%3E%3C%2Fsvg%3E'
							alt='Metamask'
						/>
						Binance
					</div>
					<div
						style={{ border: '1px solid #b3acab' }}
						className='flex flex-row items-center justify-center flex-1 py-3 uppercase transition-all rounded-md cursor-not-allowed opacity-20'
					>
						<img
							className='mr-2 w-7'
							src='data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3E%E5%B8%81%E7%A7%8D%E5%A4%87%E4%BB%BD%202%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22path-1%22%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%3E%3C%2Fcircle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22%E8%A1%A5%E5%85%85%E9%9C%80%E6%B1%82%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E8%BF%9E%E6%8E%A5%E9%92%B1%E5%8C%85-%E6%89%8B%E6%9C%BA%E5%A4%87%E4%BB%BD%22%20transform%3D%22translate%28-223.000000%2C%20-266.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E5%BC%B9%E7%AA%97%22%20transform%3D%22translate%2818.000000%2C%20132.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-4%22%20transform%3D%22translate%2820.000000%2C%2041.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-2%E5%A4%87%E4%BB%BD-2%22%20transform%3D%22translate%28156.000000%2C%2082.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84%22%20transform%3D%22translate%2829.000000%2C%2011.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22mask-2%22%20fill%3D%22white%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fmask%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E8%92%99%E7%89%88%22%3E%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22download%22%20mask%3D%22url%28%23mask-2%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22%E6%A4%AD%E5%9C%86%E5%BD%A2%22%20fill%3D%22%238247E5%22%20fill-rule%3D%22nonzero%22%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%3E%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M8.01148%2C5.30068%20C8.25312%2C5.16644%208.54688%2C5.16644%208.78852%2C5.30068%20L12.38852%2C7.30068%20C12.64248%2C7.44176%2012.8%2C7.70948%2012.8%2C8%20L12.8%2C9.30068%20L11.2%2C10.2%20L11.2%2C8.47072%20L8.4%2C6.91516%20L5.6%2C8.47072%20L5.6%2C11.52928%20L8.4%2C13.08484%20L15.21148%2C9.30068%20C15.45312%2C9.16644%2015.74688%2C9.16644%2015.98852%2C9.30068%20L19.58852%2C11.30068%20C19.84248%2C11.44176%2020%2C11.70948%2020%2C12%20L20%2C16%20C20%2C16.29052%2019.84248%2C16.55824%2019.58852%2C16.69932%20L15.98852%2C18.69932%20C15.74688%2C18.83356%2015.45312%2C18.83356%2015.21148%2C18.69932%20L11.61148%2C16.69932%20C11.35752%2C16.55824%2011.2%2C16.29052%2011.2%2C16%20L11.2%2C14.69932%20L12.8%2C13.8%20L12.8%2C15.52928%20L15.6%2C17.08484%20L18.4%2C15.52928%20L18.4%2C12.47072%20L15.6%2C10.91516%20L8.78852%2C14.69932%20C8.54688%2C14.83356%208.25312%2C14.83356%208.01148%2C14.69932%20L4.41148%2C12.69932%20C4.15752%2C12.55824%204%2C12.29052%204%2C12%20L4%2C8%20C4%2C7.70948%204.15752%2C7.44176%204.41148%2C7.30068%20L8.01148%2C5.30068%20Z%22%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E'
							alt='Wallet Connect'
						/>
						Polygon
					</div>
				</div>
				<span className='block mt-4 font-semibold'>Import your Wallet</span>
				<div className='flex flex-row mt-4 text-sm font-semibold'>
					<div
						onClick={() =>
							onConnect(METAMASK, () => onMoveAnimation('connect-modal', 'moveOutOpacity'))
						}
						className='flex flex-col items-center justify-center mr-4 capitalize transition-all cursor-pointer'
					>
						<div
							style={{ width: '60px', height: '60px' }}
							className='flex items-center justify-center mb-2 transition-all bg-gray-700 rounded-full hover:bg-gray-600'
						>
							<img className='w-10' src={Metamask} alt='Metamask' />
						</div>
						Metamask
					</div>
					<div
						onClick={() =>
							onConnect(WALLETCONNECT, () => onMoveAnimation('connect-modal', 'moveOutOpacity'))
						}
						className='flex flex-col items-center justify-center ml-4 mr-4 capitalize transition-all cursor-pointer'
					>
						<div
							style={{ width: '60px', height: '60px' }}
							className='flex items-center justify-center mb-2 transition-all bg-gray-700 rounded-full hover:bg-gray-600'
						>
							<img className='w-10' src={WalletConnect} alt='Wallet connect' />
						</div>
						Wallet connect
					</div>
				</div>
			</div>
		</div>
	)
}
