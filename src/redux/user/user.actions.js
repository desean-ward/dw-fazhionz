import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const selectCurrentUser = user => ({
    type: UserActionTypes.SELECT_CURRENT_USER
})