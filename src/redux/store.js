import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
	_state: {
		profilePage: {
			posts:[
				{img:'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg', message:"It's our new program! Hey!",},
				{img:'https://cdnimg.rg.ru/i/gallery/3f26d604/3ad23133.jpg', message:"Hey, why nobody love my?",},
			],
			newPostText: 'Add new post',
		},
		messagesPage: {
			dialogs:[
				{id: 1, user:'Stiven', avatar:'https://debaty.sumy.ua/wp-content/uploads/2019/01/9_main_new.1506602508.jpg',},
				{id: 2, user:'Victor', avatar:'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg',},
				{id: 3, user:'Makar', avatar:'https://www.mirf.ru/wp-content/uploads/2021/03/avatar-scaled-2560.jpg',},
				{id: 4, user:'Irma', avatar:'https://sahiwal.tv/wp-content/uploads/2020/06/af4471294d3829d55ac2bedd3b91f4670206ef7d.png',},
				{id: 5, user:'Sveta', avatar:'https://cdnimg.rg.ru/i/gallery/3f26d604/3ad23133.jpg',},
				{id: 6, user:'Valera', avatar:'https://www.mirf.ru/wp-content/uploads/2021/03/mv5bmjixnti1mta0m15bml5banbnxkftztcwnzc3mtuzna._v1_sx1777_cr001777999_al_.jpg',},
			],
			messages:[
				{id: 1, message:'Hi!',},
				{id: 2, message:'How is your study?',},
				{id: 3, message:'Yo',},
				{id: 4, message:'What Sapp',},
				{id: 5, message:'How are you',},
				{id: 6, message:'Welcome!',},
			],
			newMessage:[
				{sms:'It\'s new sms!',},
			],
			newMessageText: '',
		},
		sidebarPage: [
			{user:'Stiven', avatar:'https://debaty.sumy.ua/wp-content/uploads/2019/01/9_main_new.1506602508.jpg',},
			{user:'Sveta', avatar:'https://cdnimg.rg.ru/i/gallery/3f26d604/3ad23133.jpg',},
			{user:'Makar', avatar:'https://www.mirf.ru/wp-content/uploads/2021/03/avatar-scaled-2560.jpg',},
		],
	},
	_callSubscriber() {
		console.log('');
	},
	getState() {
		return this._state
	},
	subscribe (observer) {
		this._callSubscriber = observer
	},
	
	dispatch(action) {
	
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

		this._callSubscriber(this._state)
	},
}

export default store
window.store = store