import React from 'react'
import { onMoveAnimation } from 'services/useDevelopUI'
import './WhitePaper.css'

const WhitePaper = () => {
	return (
		<iframe
			className='whitepaper'
			title='Whitepaper'
			onLoad={() => onMoveAnimation('pre-loading', 'moveOutOpacity')}
			src='https://docs.google.com/presentation/d/e/2PACX-1vSUuyoSKy5ZBxqEJ4OHaD1Ao1-a_8kPVyYTSw4mzFsio6EvTF8UUFCfJu-1rjJv2Q/embed?start=false&loop=false&delayms=3000'
		></iframe>
	)
}
export default WhitePaper
