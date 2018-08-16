
import { combineReducers } from "redux";
import movies from './nowPlaying';
import genres from './genres';

const appReducer = combineReducers({
    movies,
    genres,
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer