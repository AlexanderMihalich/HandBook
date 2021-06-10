import React from 'react'
import { NavLink } from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import style from './Dialogs.module.css'
import MessageContainer from './Message/MessageContainer'

const Dialogs = (props) => {

	let dialogsElement = props.dialogs.map(d => <Dialog id={d.id} key={d.id} user={d.user} avatar={d.avatar} />)
	let messagesElement = props.messages.map(m => <MessageContainer message={m.message} key={m.id}/>)
	
	return (
		<div className={style.dialogs}>
			<div className={style.dialogs__dialogItems}>
				{dialogsElement}
			</div>
			<div className={style.dialogs__messages}>
				{messagesElement}
			</div>
		</div>
	)
}

export default Dialogs