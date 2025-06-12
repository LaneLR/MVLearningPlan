import { setMemeImage, fetchMemeImage } from "@/app/slices/changeImageSlice";
import { put, takeLatest, call } from "redux-saga/effects";

function* handleGetMemeImage() {
    try {
      const res = yield call(() => fetch(`https://meme-api.com/gimme`)) 
      const data = yield call(() => res.json())
      yield put(setMemeImage(data.url))
    } catch (err) {
      console.error("Error occurred: ", err)
    }
}

export default function* changeImageSaga() {
    yield takeLatest(fetchMemeImage.type, handleGetMemeImage)
}