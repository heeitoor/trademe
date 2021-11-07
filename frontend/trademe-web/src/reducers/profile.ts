
import { ProfileActions } from "../actions/profile";
import { ReducerAction } from "../util/reducer-action";

const initialState = {
    name: ''
}

export const ProfileReducer = (state = initialState, action: ReducerAction<ProfileActions>) => {
    switch (action.type) {
        case ProfileActions.CHANGE_NAME:
            return { ...state, name: action.value };
        default:
            return state;
    }
}
