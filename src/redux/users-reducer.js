let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
	users: [],
	pageSize: 5,
	totalUserCount: 0,
	currentPage: 2,
	isFetching: true,
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
			}
		case SET_USERS:
			return { ...state, users: action.users }
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPag }
		case SET_USERS_TOTAL_COUNT:
			return { ...state, totalUserCount: action.count }
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }
		default:
			return state
	}
}

export const followCreator = (userId) => ({ type: FOLLOW, userId })
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId })
export const setUserCreator = (users) => ({ type: SET_USERS, users })
export const setCurrentpageCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountCreator = (totalUserCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUserCount })
export const toggleIsFetchingCreator = (isFetching) => ({ type: TOGGLE_IS_FETCHING, count: isFetching })

export default usersReducer