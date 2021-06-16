import React from 'react';
import Description from './Description/Description';
import style from './Profile.module.css'
import AddPostContainer from './AddPost/AddPostContainer';

const Profile = (props) => {

	return (
		<div className={style.profile}>
			<Description profile={props.profile} />
			<AddPostContainer />
		</div>
	)
}
export default Profile