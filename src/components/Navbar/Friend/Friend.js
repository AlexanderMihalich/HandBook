import React from 'react'
import style from './../Navbar.module.css'

const Friend = (props) => {

	return (
		<div className={style.nav__friend}>
			<img className={style.nav__avatar} src={props.avatar} />
			<span className={style.nav__name}>{props.user}</span>
		</div>
	)
}
export default Friend