import React from 'react'
import style from './Header.module.css'

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className={`${style.content} _container`}>
				<img src='https://image000.flaticon.com/png/512/187/187850.png' />
				<h1 className={style.title}>HandBook</h1>
			</div>
	</header>
	)
}
export default Header