// src/pages/NewCar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarContext } from "../context/CarContext.jsx";

export default function NewCar() {
  const { dispatch } = useCarContext();
  const navigate = useNavigate();

  // Local state for form fields
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation: require name, brand, year
    if (!name.trim() || !brand.trim() || !year.trim()) {
      // You could show an error message here if you want
      return;
    }

    const newCar = {
      id: crypto.randomUUID(),
      name: name.trim(),
      brand: brand.trim(),
      year: Number(year),
      description: description.trim(),
      reviews: [],
    };

    // 1) Add the car to global state
    dispatch({ type: "ADD_CAR", payload: newCar });

    // 2) Navigate to its details page
    navigate(`/cars/${newCar.id}`);
  }

  return (
    <div className="card">
      <h1>Add a new car</h1>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Tesla Model 3"
          />
        </label>

        <label>
          Brand
          <input
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="e.g. Tesla"
          />
        </label>

        <label>
          Year
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g. 2023"
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description"
          />
        </label>

        <button type="submit" className="button">
          Save car
        </button>
      </form>
    </div>
  );
}
