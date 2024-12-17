import {
  FETCH_CARS_FAILURE,
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
} from "../actions";

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
}

export interface CarState {
  cars: Car[];
  loading: boolean;
  error: string | null;
}

export interface RootState {
  cars: CarState;
}

export interface FetchCarsAction {
  type: typeof FETCH_CARS_REQUEST;
}

export interface FetchCarsSuccessAction {
  type: typeof FETCH_CARS_SUCCESS;
  payload: Car[];
}

export interface FetchCarsFailureAction {
  type: typeof FETCH_CARS_FAILURE;
  payload: string;
}

export type CarActions =
  | FetchCarsAction
  | FetchCarsSuccessAction
  | FetchCarsFailureAction;
