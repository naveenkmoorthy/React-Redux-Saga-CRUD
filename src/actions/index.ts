import { Car } from "../types/car";

export const FETCH_CARS_REQUEST = "FETCH_CARS_REQUEST";
export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";
export const FETCH_CARS_FAILURE = "FETCH_CARS_FAILURE";

export const ADD_CAR = "ADD_CAR";
export const ADD_CAR_SUCCESS = "ADD_CAR_SUCCESS";
export const ADD_CAR_FAILURE = "ADD_CAR_FAILURE";

export const DELETE_CAR = "DELETE_CAR";
export const DELETE_CAR_SUCCESS = "DELETE_CAR_SUCCESS";
export const DELETE_CAR_FAILURE = "DELETE_CAR_FAILURE";

export const UPDATE_CAR = "UPDATE_CAR";
export const UPDATE_CAR_SUCCESS = "UPDATE_CAR_SUCCESS";
export const UPDATE_CAR_FAILURE = "UPDATE_CAR_FAILURE";

export const fetchCarsRequest = () => ({ type: FETCH_CARS_REQUEST });
export const fetchCarsSuccess = (cars: Car) => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars,
});
export const fetchCarsFailure = (error: string) => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});
export const addCar = (car: Car) => ({
  type: ADD_CAR,
  payload: car,
});
export const addCarSuccess = (car: Car) => ({
  type: ADD_CAR_SUCCESS,
  payload: car,
});
export const addCarFailure = (error: string) => ({
  type: ADD_CAR_FAILURE,
  payload: error,
});
export const deleteCar = (id: string) => ({
  type: DELETE_CAR,
  payload: id,
});
export const deleteCarSuccess = (id: string) => ({
  type: DELETE_CAR_SUCCESS,
  payload: id,
});
export const deleteCarFailure = (error: string) => ({
  type: DELETE_CAR_FAILURE,
  payload: error,
});
export const updateCar = (car: Car) => ({
  type: UPDATE_CAR,
  payload: car,
});
export const updateCarSuccess = (car: Car) => ({
  type: UPDATE_CAR_SUCCESS,
  payload: car,
});
export const updateCarFailure = (error: string) => ({
  type: UPDATE_CAR_FAILURE,
  payload: error,
});
