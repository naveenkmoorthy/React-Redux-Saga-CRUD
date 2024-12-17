import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarState } from "../types/car";
import { deleteCar } from "../actions";

const CarList = () => {
  const { cars, loading, error } = useSelector(
    (state: { cars: CarState }) => state.cars
  );
  const dispatch = useDispatch();

  const handleDeleteCar = (id: string) => {
    dispatch(deleteCar(id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error {error}</p>;

  return (
    <>
      <h2 className="text-2xl mb-2">Available cars</h2>
      {cars.map((car: any) => (
        <div
          className="flex mb-3 items-center gap-4 justify-between w-6/12"
          key={car.id}
        >
          <div>
            <h3>
              {car.make} {car.model}
            </h3>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
          </div>
          <div>
            <button
              className="px-2 py-1 bg-black text-white"
              onClick={() => handleDeleteCar(car.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarList;
