import React from 'react'
import { connect } from 'react-redux'
import { follow, toggleIsFetching, setCurrentPage, setUsers, setUsersTotalCount, unfollow } from '../../redux/users-reducer'
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'

class UsersAPIContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
			withCredentials: true
		})
			.then(responce => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(responce.data.items)
				this.props.setUsersTotalCount(responce.data.totalCount)
			})
	}
	onPageChanched = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
			withCredentials: true
		})
			.then(responce => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(responce.data.items)
			})
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			< Users
				usersPage={this.props.usersPage}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				totalUserCount={this.props.totalUserCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanched={this.onPageChanched}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

let UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching })(UsersAPIContainer)

export default UsersContainer