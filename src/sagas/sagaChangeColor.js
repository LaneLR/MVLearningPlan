import { delay, put, takeEvery } from "redux-saga/effects";
import { changeToBlue, changeToBlueAsync } from "@/app/slices/changeColorSlice";

function* handleAsyncChangeBlue() {
    yield delay(3000);
    yield put(changeToBlue())
}

export default function* colorSaga() {
    yield takeEvery(changeToBlueAsync.type, handleAsyncChangeBlue)
}