let ADD_POST = 'ADD-POST'
let UPDATE_NEW_POST = 'UPDATE-NEW-POST'

let initialState = {
	posts:[
		{id: 1, img:'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg', message:"It's our new program! Hey!",},
		{id: 2, img:'https://cdnimg.rg.ru/i/gallery/3f26d604/3ad23133.jpg', message:"Hey, why nobody love my?",},
	],
	newPostText: 'Add new post',
}

const profileReducer = (state = initialState, action) => {

		switch (action.type) {
			case ADD_POST:
				let newPost = {
					id: 3,
					img:'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg',
					message: state.newPostText,
				}
				return {
					...state,
					posts: [...state.posts, newPost],
					newPostText: ''
			}
		case UPDATE_NEW_POST:
				return {
					...state,
					newPostText: action.newText
				}
		default:
			return state
	}
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})

export default profileReducer