import React from 'react'
import { connect } from 'react-redux'
import { addPostCreator,updateNewPostTextCreator } from '../../../redux/profile-reducer'
import AddPost from './AddPost'

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
	addPost: () => {
			dispatch(addPostCreator())
		},
		updateNewPostText: (text) => {
			let action = updateNewPostTextCreator(text)
			dispatch(action)
		}
	}
}

let AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer