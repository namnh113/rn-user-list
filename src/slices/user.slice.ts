import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getUser} from '../services/user.api';

// First, create the thunk
const fetchUsers = createAsyncThunk('users/getAll', async () => {
  const response = await getUser();
  return response;
});

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: state => {
      state.users = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const {getUsers} = userSlice.actions;

export default userSlice.reducer;

export {fetchUsers};
