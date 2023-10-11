export const selectCurrentUser = (state) => state.user.currentUser;

export const setCurrentUser = (state, action) => (state.user = action.payload);
