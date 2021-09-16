/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { requestPopMessage } from './redux/alert/action'
import { useDispatch, useSelector } from 'react-redux'
import { Timer } from './utils/timer'

export const onMoveAnimation = (ele, animation) => {
	const root = document.querySelector(`#${ele}`)
	if (root) {
		root.style.animation = `${animation} .3s`
		root.style.animationFillMode = 'forwards'
	}
}
export const timerArray = []

export const useHideMessage = () => {
	const selector = useSelector((state) => state.messageReducer)
	const dispatch = useDispatch()
	React.useEffect(() => {
		var timer = new Timer(() => {
			dispatch(requestPopMessage())
			timerArray.shift()
		}, 5000)
		timerArray.push(timer)
	}, [selector.count])
}
export const useReRenderComponent = (state, anchor) => {
	const [isRender, setIsRender] = React.useState(false)
	React.useEffect(() => {
		if (state?.destination) {
			if (state?.destination.anchor === anchor) {
				setIsRender(true)
			} else {
				setIsRender(false)
			}
		}
	}, [state?.destination?.anchor])
	return isRender
}
export const onTriggerMenu = () => {
	const root = document.querySelector('#menu')
	if (root) {
		if (root.style.animationName !== 'moveInCircle') {
			root.style.animation = 'moveInCircle .5s'
			root.style.animationFillMode = 'forwards'
		} else {
			root.style.animation = 'moveOutCircle .5s'
			root.style.animationFillMode = 'forwards'
		}
	}
}
