let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'

let initialState = {
	users: [ ]
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(  u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u
				})
			}
			case UNFOLLOW:
				return {
					...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u
				})
			}
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		default:
			return state
	}
}

export const followCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUserCreator = (users) => ({type: SET_USERS, users})

export default usersReducer