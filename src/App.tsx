import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCarsRequest } from "./actions";
import AddCarForm from "./components/AddCarForm";
import UpdateCarForm from "./components/UpdateCarForm";
import CarList from "./components/CarList";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsRequest());
  }, [dispatch]);

  return (
    <div>
      <div className="bg-amber-100 p-2">
        <UpdateCarForm />
      </div>
      <div className="bg-orange-200 p-2">
        <CarList />
      </div>
      <div className="bg-slate-400 p-2">
        <AddCarForm />
      </div>
    </div>
  );
};

export default App;
