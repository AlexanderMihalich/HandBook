import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialog.module.css'

const Dialog = (props) => {
	return (
		<div className={style.dialogs__dialogItem}>
			<NavLink to={'/dialogs/' + props.id} className={style.dialog__user}>
				<img src={props.avatar} className={style.dialog__avatar}/>
				{props.user}
			</NavLink>
		</div>
	)
}


export default Dialog