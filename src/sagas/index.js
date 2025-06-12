import {all} from 'redux-saga/effects'
import changeBlueSaga from './sagaChangeColor'
import changeImageSaga from './sagaChangeImage'

export default function* rootSaga() {
    yield all([
        changeBlueSaga(),
        changeImageSaga(),
    ])
}