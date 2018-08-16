
import {
    SET_NOW_PLAYING,
} from "../constants/action-types";

const initState = {
    nowPlaying: {
        results: []
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_NOW_PLAYING:
            return {
                ...state,
                nowPlaying: action.payload.result
            };
        default:
            return state;
    }
};

