import React from 'react'
import './Users.css'
import userPhoto from '../../img/user.png'
import * as axios from 'axios';

class Users extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(responce => {
				this.props.setUsers(responce.data.items)
				this.props.setUsersTotalCount(responce.data.totalCount)
			})
	}
	onPageChanched = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(responce => {
				this.props.setUsers(responce.data.items)
			})

	}

	render() {

		let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

		let pages = []
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i)
		}

		return (
			<div className='users'>
				<h2 className='users__title'>Users</h2>
				<div className='users__body'>
					{this.props.usersPage.map(u =>
						<div key={u.id} className='user'>
							<div className='user__ava'>
								{/* <img src={u.avatar} /> */}
								<img src={u.photos.small !== null ? u.photos.small : userPhoto} />
							</div>
							<div className='user__items'>
								<div className='user__item'>
									<h3 className='user__name'>{u.name}</h3>
									<div className='user__text'>{"u.country"}</div>
									<div className='user__text'>{"u.city"}</div>
								</div>
								<div className='user__btns'>
									{u.followed
										? <button className='user__btn user__btn_red' onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
										: <button className='user__btn' onClick={() => { this.props.follow(u.id) }}>Follow</button>
									}
								</div>
							</div>
						</div>)}
					<ul className="users__pagination pagination">
						{pages.map(p => {
							return <li className={this.props.currentPage === p && "pagination__item active" || "pagination__item"}
								onClick={() => { this.onPageChanched(p) }}> {p}</li>
						})}
					</ul>
				</div>
			</div >
		)
	}
}

export default Users