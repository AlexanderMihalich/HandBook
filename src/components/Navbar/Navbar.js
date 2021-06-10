import React from 'react'
import { NavLink } from 'react-router-dom'
import Friend from './Friend/Friend'
import style from './Navbar.module.css'

const Nav = (props) => {

	let friendsElement = props.friends.map(f => <Friend avatar={f.avatar} key={f.id} user={f.user} />)
	return (
		<nav className={style.nav}>
			<ul>
				<li><NavLink to='/profile'
					activeClassName={style.active}>Profile</NavLink></li>
				<li><NavLink to='/dialogs'
					activeClassName={style.active}>Messages</NavLink></li>
				<li><NavLink to='/users'
					activeClassName={style.active}>Users</NavLink></li>
				<li><NavLink to='/music'
					activeClassName={style.active}>Music</NavLink></li>
				<li><NavLink to='/settings'
					activeClassName={style.active} className={style.nav__settings}>Settings</NavLink></li>
			</ul>
			<h2 className={style.nav__title}>Best friends:</h2>
			<div className={style.nav__friends}>
				{friendsElement}
			</div>
		</nav>
	)
}
export default Nav