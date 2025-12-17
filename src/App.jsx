import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import CarDetails from "./pages/CarDetails.jsx";
import NewCar from "./pages/NewCar.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/new" element={<NewCar />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;