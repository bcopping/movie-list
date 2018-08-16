import { call, put } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../constants/action-types";
import * as api from "../api"
import _ from "lodash";

function movies() {
    return axios.get(`${api.BASE_URL}movie/now_playing?${api.KEY}`)
}

export function* getNowPlayingMovies() {
    try {
        //get the movies from state
        const result = yield call(movies);
        let ids = [];

        result.data.results.forEach(element => {
            ids.push(element.genre_ids)
        });

        ids = _.flattenDeep(ids);
        ids = _.uniq(ids);

        yield put({
            type: actionTypes.SET_NOW_PLAYING,
            payload: {
                result: result.data
            }
        });

        yield put({
            type: actionTypes.SET_GENRES_AVAILABLE,
            payload: {
                genresAvailable: ids
            }
        });

    } catch (error) {
        console.log('erroooooooor', error)
    }
}
