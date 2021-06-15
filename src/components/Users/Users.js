import React from 'react'
import './Users.css'
import userPhoto from '../../img/user.png'
import * as axios from 'axios';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

	let pageCount = Math.ceil(props.totalUserCount / props.pageSize)

	let pages = []
	// for (let i = 1; i <= pageCount; i++) {
	for (let i = 1; i <= 11; i++) {
		pages.push(i)
	}
	// if (props.usersPage.length === 0) {
	// 	axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
	// 		props.setUsers(responce.data.items)
	// 	})

	// props.setUsers(
	// 	[
	// 		{ id: 1, followed: true, name: 'Stiven A.', country: 'AOE', city: 'Dybai', avatar: 'https://debaty.sumy.ua/wp-content/uploads/2019/01/9_main_new.1506602508.jpg', },
	// 		{ id: 2, followed: false, name: 'Victor I.', country: 'Ukraine', city: 'Kiev', avatar: 'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg', },
	// 		{ id: 3, followed: false, name: 'Makar B.', country: 'Russian', city: 'Sahalin', avatar: 'https://www.mirf.ru/wp-content/uploads/2021/03/avatar-scaled-2560.jpg', },
	// 		{ id: 4, followed: true, name: 'Irma V.', country: 'Belarus', city: 'Minsk', avatar: 'https://sahiwal.tv/wp-content/uploads/2020/06/af4471294d3829d55ac2bedd3b91f4670206ef7d.png', },
	// 		{ id: 5, followed: true, name: 'Sveta K.', country: 'Ukraine', city: 'Odessa', avatar: 'https://cdnimg.rg.ru/i/gallery/3f26d604/3ad23133.jpg', },
	// 		{ id: 6, followed: false, name: 'Valera S.', country: 'Ukraine', city: 'Zhytomyr', avatar: 'https://www.mirf.ru/wp-content/uploads/2021/03/mv5bmjixnti1mta0m15bml5banbnxkftztcwnzc3mtuzna._v1_sx1777_cr001777999_al_.jpg', },
	// 	]
	// )
	// }

	return (
		<div className='users'>
			<h2 className='users__title'>Users</h2>
			<div className='users__body'>
				{props.usersPage.map(u =>
					<div key={u.id} className='user'>
						<div className='user__ava'>
							{/* <img src={u.avatar} /> */}
							<NavLink to={'/profile/' + u.id}>
								<img src={u.photos.small !== null ? u.photos.small : userPhoto} />
							</NavLink>
						</div>
						<div className='user__items'>
							<div className='user__item'>
								<h3 className='user__name'>{u.name}</h3>
								<div className='user__text'>{"u.country"}</div>
								<div className='user__text'>{"u.city"}</div>
							</div>
							<div className='user__btns'>
								{u.followed
									? <button className='user__btn user__btn_red' onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
									: <button className='user__btn' onClick={() => { props.follow(u.id) }}>Follow</button>
								}
							</div>
						</div>
					</div>)}
				<ul className="users__pagination pagination">
					{pages.map((p, index) => {
						return <li key={index} className={props.currentPage === p && "pagination__item pagination__item_active" || "pagination__item"}
							onClick={() => { props.onPageChanched(p) }}> {p}</li>
					})}
				</ul>
			</div>
		</div >
	)
}
export default Users