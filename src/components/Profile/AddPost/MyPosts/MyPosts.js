import React from 'react'
import style from './MyPosts.module.css'

const MyPosts = (props) => {
	return (
		<div className={style.posts__item}>
			<div className={style.posts__ava}>
				<img src={props.img}/>
			</div>
			<p className={style.posts__text}>
				{props.message}
			</p>
		</div>
	)
}
export default MyPosts