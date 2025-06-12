import {all} from 'redux-saga/effects'
import changeBlueSaga from './sagaChangeColor'

export default function* rootSaga() {
    yield all([
        changeBlueSaga(),
    ])
}