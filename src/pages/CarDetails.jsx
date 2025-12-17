// src/pages/CarDetails.jsx
import { useParams } from "react-router-dom";
import { useCarContext } from "../context/CarContext.jsx";
import { useState } from "react";

export default function CarDetails() {
  // 1) Get the :id from URL
  const { id } = useParams();

  // 2) Get state and dispatch from global context
  const { state, dispatch } = useCarContext();

  // 3) Find the car with this id
  const car = state.cars.find((c) => c.id === id);

  // 4) Local state for the review form
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  // 5) If the car doesn’t exist, show an error message
  if (!car) {
    return (
      <div className="card">
        <h2>Car not found</h2>
        <p>The requested car does not exist.</p>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    // basic validation: don’t accept empty values
    if (!author.trim() || !text.trim()) {
      return;
    }

    const newReview = {
      id: crypto.randomUUID(), // or Date.now().toString()
      author: author.trim(),
      text: text.trim(),
    };

    // 6) Dispatch an ADD_REVIEW action to the reducer
    dispatch({
      type: "ADD_REVIEW",
      payload: {
        carId: car.id,
        review: newReview,
      },
    });

    // 7) Clear the form fields
    setAuthor("");
    setText("");
  }

  return (
    <div className="card">
      <h1>{car.name}</h1>

      <p>
        <strong>Brand:</strong> {car.brand}
      </p>
      <p>
        <strong>Year:</strong> {car.year}
      </p>
      <p className="muted">{car.description}</p>

      <section className="reviews">
        <h2>Reviews</h2>

        {car.reviews.length === 0 && <p>No reviews yet.</p>}

        <ul className="review-list">
          {car.reviews.map((rev) => (
            <li key={rev.id}>
              <strong>{rev.author}:</strong> {rev.text}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Add a review</h3>
        <form onSubmit={handleSubmit} className="form">
          <label>
            Your name
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Reviewer name"
            />
          </label>

          <label>
            Review
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your thoughts..."
            />
          </label>

          <button type="submit" className="button">
            Submit review
          </button>
        </form>
      </section>
    </div>
  );
}
