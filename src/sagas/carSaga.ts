import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_CARS_REQUEST,
  fetchCarsSuccess,
  fetchCarsFailure,
  addCarFailure,
  ADD_CAR,
  deleteCarFailure,
  DELETE_CAR,
  addCarSuccess,
  deleteCarSuccess,
  updateCarSuccess,
  updateCarFailure,
  UPDATE_CAR,
} from "../actions";

const apiUrl = "http://localhost:4000/cars";

function* fetchCars(): Generator<any, void, any> {
  try {
    const response = yield call(fetch, apiUrl);
    const data = yield call([response, "json"]);
    yield put(fetchCarsSuccess(data));
  } catch (error: any) {
    yield put(fetchCarsFailure(error.message));
  }
}

function* addCarSaga(action: any): any {
  try {
    const response = yield call(fetch, apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = yield response.json();
    yield put(addCarSuccess(data));
  } catch (error: any) {
    yield put(addCarFailure(error.message));
  }
}

function* deleteCarSaga(action: any): any {
  try {
    const response = yield call(fetch, `${apiUrl}/${action.payload}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    yield put(deleteCarSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteCarFailure(error.message));
  }
}

function* updateCarSaga(action: any): any {
  try {
    const response = yield call(fetch, `${apiUrl}/${action.payload.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    yield put(updateCarSuccess(response.data));
  } catch (error: any) {
    yield put(updateCarFailure(error.message));
  }
}

export function* carSaga() {
  yield takeEvery(FETCH_CARS_REQUEST, fetchCars);
  yield takeEvery(ADD_CAR, addCarSaga);
  yield takeEvery(DELETE_CAR, deleteCarSaga);
  yield takeEvery(UPDATE_CAR, updateCarSaga);
}

// https://mocki.io/v1/6510226b-437e-40f0-96ea-55a3bc9b8c88
