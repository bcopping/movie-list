
import {
    SET_GENRES,
    SET_GENRES_AVAILABLE,
} from "../constants/action-types";

const initState = {
    genresArray: [],
    genresAvailable: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_GENRES:

            let genres = action.payload.genres.filter(genre => {

                return initState.genresAvailable.filter(genreAvail => {
                    return genre.id == genreAvail
                }).length == 1
            });

            return {
                ...state,
                genresArray: action.payload.genres
            };
        case SET_GENRES_AVAILABLE:
            return {
                ...state,
                genresAvailable: action.payload.genresAvailable
            }
        default:
            return state;
    }
};

