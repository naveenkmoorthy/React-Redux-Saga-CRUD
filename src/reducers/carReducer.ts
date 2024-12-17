import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  ADD_CAR,
  ADD_CAR_FAILURE,
  DELETE_CAR,
  DELETE_CAR_FAILURE,
  UPDATE_CAR,
  UPDATE_CAR_FAILURE,
} from "../actions";
import { CarState } from "../types/car";

const initialState: CarState = {
  cars: [],
  loading: false,
  error: null,
};

const carReducer = (state = initialState, action: any): CarState => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CARS_SUCCESS:
      return { ...state, loading: false, cars: action.payload };
    case FETCH_CARS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_CAR:
      return { ...state, cars: [...state.cars, action.payload] };
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    case UPDATE_CAR:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id ? action.payload : car
        ),
      };
    case ADD_CAR_FAILURE:
    case DELETE_CAR_FAILURE:
    case UPDATE_CAR_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default carReducer;
