import { useCarContext } from "../context/CarContext.jsx";
import CarListItem from "../components/CarListItem.jsx";

// Home page component to display cars
export default function Home() {
  const { state } = useCarContext(); // { state, dispatch }
  const cars = state.cars;

  return (
    <div>
      <h1>Cars</h1>
      <div className="grid">
        {cars.map((car) => (
          <CarListItem key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}