import {createSlice, nanoid} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      //console.log(nanoid());

      //console.log(action.payload);
      const newUser = {
        id: nanoid(),
        name: action.payload.user,
      };
      state.push(newUser);
    },
    deleteUser: (state, action) => {
      //console.log(action.payload.id);
      //console.log(state);
      return state.filter(item => item.id === action.payload.id);
    },
  },
});

export const {addUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;
