import React from 'react'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
	return {
		dialogs: state.messagesPage.dialogs,
		messages: state.messagesPage.messages,
	}
}
let DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer