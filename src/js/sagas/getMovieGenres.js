import { call, put } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../constants/action-types";
import * as api from "../api"
function genres() {
    return axios.get(`${api.BASE_URL}genre/movie/list?${api.KEY}&language=en-US`)
}

export function* getMovieGenres(action) {

    try {
        const result = yield call(genres);

        yield put({
            type: actionTypes.SET_GENRES,
            payload: {
                genres: result.data.genres
            }
        });

    } catch (error) {
        console.log('erroooooooor', error)
    }
}
