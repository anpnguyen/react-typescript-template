import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface IUserFilterMenuState {
    techStack: string;
    skills: string[];
}

const initialState: IUserFilterMenuState = {
    techStack: 'select',
    skills: [],
};

export const userFilterMenuSlice = createSlice({
    name: 'userFilterMenu',
    initialState: initialState,
    reducers: {
        userSelectedTechStack: (state, { payload }) => {
            state.techStack = payload;
        },
        userSelectedSkills: (state, { payload }) => {
            state.skills = payload;
        },
    },
});

export const { userSelectedTechStack, userSelectedSkills } =
    userFilterMenuSlice.actions;

export const selectedTechStackState = (state: RootState) =>
    state.userFilterMenu;

export default userFilterMenuSlice.reducer;
