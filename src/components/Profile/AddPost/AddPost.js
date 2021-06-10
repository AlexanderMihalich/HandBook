import React from 'react'
import style from './AddPost.module.css'
import MyPosts from './MyPosts/MyPosts';

const AddPost = (props) => {

	let newPostElement = React.createRef()
	let postsElement = props.posts.map(p => <MyPosts img={p.img} key={p.id} message={p.message} />)
	
	let onAddPost = () => {
		props.addPost()
	}
	
	let onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}

	return (
		<div className={style.content__addpost}>
			<h2 className='title'>My posts</h2>
			<textarea
				className={`${style.content__textarea} textarea`}
				onChange={onPostChange}
				ref={newPostElement}
				value={props.newPostText}
			></textarea>
			<button className={style.content__btn} onClick={onAddPost}>Add Post</button>
			<div className={style.posts}>
				{postsElement}
			</div>
		</div>
		
	)
}
export default AddPost