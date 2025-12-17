import { Link } from "react-router-dom";

// Component to display a single car item in a list
export default function CarListItem({ car }) {
  return (
    <div className="card">
      <h3>{car.name}</h3>
      <p>
        {car.brand} • {car.year}
      </p>
      <p className="muted">{car.description}</p>

      <Link to={`/cars/${car.id}`} className="button button-secondary">
        View details
      </Link>
    </div>
  );
}