import { delay, put, take, takeEvery } from "redux-saga/effects";
import { changeToBlue } from "@/app/slices/changeColorSlice";

function* handleAsyncChangeBlue() {
    yield delay(3000);
    yield put(changeToBlue())
}

export default function* colorSaga() {
    yield takeEvery('changeColor/changeToBlueAsync', handleAsyncChangeBlue)
}