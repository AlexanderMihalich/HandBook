import React from 'react'
import style from './Description.module.css'

const Description = (props) => {
	return (
		<div className={style.description}>
			<div className={style.description__avatar}>
				<img src='https://images.wallpaperscraft.ru/image/serfing_chelovek_siluet_184882_1920x1080.jpg'/>
			</div>
				<div className={style.description__info}>
					<h2 className={`${style.description__name} title`} >Alexander Z.</h2>
					<ul>
						<li className={style.description__item}>Date dirth: 28 marth</li>
						<li className={style.description__item}>City: Kyiv</li>
						<li className={style.description__item}>Education: BSU'11</li>
						<li className={style.description__item}>Web Site: <a href='https://www.weblancer.net/users/alex_ander-web/'></a></li>
					</ul>
				</div>
			</div>
	)
}
export default Description