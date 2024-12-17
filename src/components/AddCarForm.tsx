import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../actions";

const AddCarForm = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (make && model && year && price) {
      const newCar = {
        id: Date.now().toString(),
        make,
        model,
        year: parseInt(year),
        price: parseInt(price),
      };

      dispatch(addCar(newCar));

      setMake("");
      setModel("");
      setYear("");
      setPrice("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <h2 className="text-2xl mb-2">Add new car</h2>
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
        Add car
      </button>
    </form>
  );
};

export default AddCarForm;
