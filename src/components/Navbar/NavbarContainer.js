import React from 'react'
import { connect } from 'react-redux'
import Nav from './Navbar'

let mapStateToProps = (state) => {

	return {
		friends: state.sidebarPage
	}
}

let NavbarContainer = connect(mapStateToProps)(Nav)

export default NavbarContainer