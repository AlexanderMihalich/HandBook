import React from 'react'
import style from './Message.module.css'
import Sms from './Sms/Sms';

const Message = (props) => {

	let newMessageElement = React.createRef();
	let smsElement = props.newMessage.map(s => <Sms sms={s.sms}  key={s.id}/>)

	let onSendMessangeClick = () => {
		props.sendMessage()
	}
	let onNewMessageChange = (e) => {
		let body = e.target.value
		props.updateNewMessageBody(body)
	}

	return (
		<div className={style.dialogs__message}>
			{props.message}
			{smsElement}
			<div className={style.dialogs__add}>
				<textarea
					className={`${style.dialogs__textarea} textarea`}
					value={props.newMessageText}
					onChange={onNewMessageChange}
					ref={newMessageElement}
				>
				</textarea>
				<button className={style.diaolgs__btn}
					onClick={onSendMessangeClick}
				></button>
			</div>
		</div>
	)
}

export default Message