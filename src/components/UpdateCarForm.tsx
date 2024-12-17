import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, updateCar } from "../actions";
import { CarState } from "../types/car";

const UpdateCarForm = () => {
  const cars = useSelector((state: { cars: CarState }) => state.cars.cars);
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleSelect = (id: string) => {
    const car = cars.find((c) => c.id === id);
    if (car) {
      setSelectedCarId(car.id);
      setMake(car.make);
      setModel(car.model);
      setYear(car.year.toString());
      setPrice(car.price.toString());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedCarId && make && model && year && price) {
      const updatedCar = {
        id: selectedCarId,
        make,
        model,
        year: parseInt(year),
        price: parseInt(price),
      };

      dispatch(updateCar(updatedCar));

      setSelectedCarId(null);
      setMake("");
      setModel("");
      setYear("");
      setPrice("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-2">Update car</h2>
      <div className="">
        <div>
          <select
            value={selectedCarId || ""}
            onChange={(e) => handleSelect(e.target.value)}
            className="border-solid border-2"
          >
            <option>Select a car</option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.make} {car.model} ({car.year})
              </option>
            ))}
          </select>
        </div>
      </div>
      {selectedCarId && (
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="flex w-6/12 justify-between mb-2 items-center">
            <label>Make</label>
            <input
              type="text"
              className="border-solid border-2"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </div>
          <div className="flex w-6/12 justify-between mb-2 items-center">
            <label>Model</label>
            <input
              type="text"
              className="border-solid border-2"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="flex w-6/12 justify-between mb-2 items-center">
            <label>Year</label>
            <input
              type="number"
              className="border-solid border-2"
              value={year && year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="flex w-6/12 justify-between mb-2 items-center">
            <label>Price</label>
            <input
              type="number"
              className="border-solid border-2"
              value={price && price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button className="px-2 py-1 bg-black text-white mt-2" type="submit">
            Update car
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateCarForm;
