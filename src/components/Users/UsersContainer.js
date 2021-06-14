import React from 'react'
import { connect } from 'react-redux'
import { followCreator, setCurrentpageCreator, setUserCreator, setUsersTotalCountCreator, unfollowCreator } from '../../redux/users-reducer'
import * as axios from 'axios';
import Users from './Users';

class UsersAPIContainer extends React.Component {
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
		return <Users
			usersPage={this.props.usersPage}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
			totalUserCount={this.props.totalUserCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChanched={this.onPageChanched}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followCreator(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowCreator(userId))
		},
		setUsers: (users) => {
			dispatch(setUserCreator(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentpageCreator(pageNumber))
		},
		setUsersTotalCount: (totalCount) => {
			dispatch(setUsersTotalCountCreator(totalCount))
		}
	}
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer