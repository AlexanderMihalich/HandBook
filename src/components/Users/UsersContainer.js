import React from 'react'
import { connect } from 'react-redux'
import { followCreator, setUserCreator, unfollowCreator } from '../../redux/users-reducer'
import Users from './UsersC'

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage.users
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
		}
	}
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer