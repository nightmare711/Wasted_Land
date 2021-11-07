import React from 'react'
import './ConfirmModal.css'
import { onMoveAnimation } from 'services/useDevelopUI'

/**
 * @author
 * @function ConfirmModal
 **/

export const ConfirmModal = (props) => {
	const { modal_id, todoYes, todoNo, children } = props
	return (
		<div id={modal_id} className='modal-confirm-container overlay flex  items-center'>
			<div className='modal-confirm-popup flex flex-col justify-between items-center'>
				<div className='modal__info text-white mb-8'>{children}</div>
				<div className='flex items-center w-4/5 justify-around mb-14'>
					<div
						className='btn-primary-minigame confirm__btn-yes mr-7'
						onClick={() => {
							onMoveAnimation(`${modal_id}`, 'moveOutOpacity')
							if (todoYes) todoYes()
						}}
					></div>
					<div
						className='btn-primary-minigame confirm__btn-no'
						onClick={() => {
							onMoveAnimation(`${modal_id}`, 'moveOutOpacity')
							if (todoNo) todoNo()
						}}
					></div>
				</div>
			</div>
		</div>
	)
}
export default ConfirmModal
