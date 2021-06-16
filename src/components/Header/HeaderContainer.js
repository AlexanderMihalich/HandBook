import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer'
import * as axios from 'axios';

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then(responce => {
				if (responce.data.resultCode === 0) {
					let { id, email, login } = responce.data.data
					this.props.setAuthUserData(id, email, login)
				}
			})
	}
	render() {
		return (
			<Header {...this.props} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)