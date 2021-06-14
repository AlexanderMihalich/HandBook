import React from 'react'
import { connect } from 'react-redux'
import { followCreator, setCurrentpageCreator, setUserCreator, setUsersTotalCountCreator, unfollowCreator } from '../../redux/users-reducer'
import Users from './UsersC'

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
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer