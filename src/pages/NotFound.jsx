import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="card">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="button">
        Back to Home
      </Link>
    </div>
  );
}