/*
- React context for managing car-related data (car details and reviews).
- useReducer hook to handle state changes.
- dispatch({ type: "", payload: data }) is how state is changed.
- Context.Provider makes state and dispatch available. to any component.
*/

import { createContext, useContext, useReducer } from "react";

// Create CarContext to manage car-related state across the application
const CarContext = createContext();

// Initial state with sample car data
const initialState = {
  cars: [
    {
      id: "1",
      name: "Tesla Model 3",
      brand: "Tesla",
      year: 2023,
      description: "Electric sedan with great range.",
      reviews: [
        { id: "r1", author: "Alex", text: "Super smooth ride!" },
        { id: "r2", author: "Sam", text: "Love the autopilot." },
      ],
    },
    {
      id: "2",
      name: "Toyota Corolla",
      brand: "Toyota",
      year: 2021,
      description: "Reliable compact car, great on fuel.",
      reviews: [{ id: "r3", author: "Jamie", text: "Perfect daily driver." }],
    },
  ],
};

// Reducer function to manage car state: how state changes when actions are dispatched
function carReducer(state, action) {
    switch (action.type) {
        case 'ADD_CAR': {
            // action.payload is the new car object
            return {
                ...state,
                cars: [...state.cars, action.payload],
            };
        }

        case "ADD_REVIEW": {
            // action.payload contains carId and the new review object
            const { carId, review } = action.payload;
            return {
                ...state,
                cars: state.cars.map((car) =>
                    car.id === carId
                        ? { ...car, reviews: [...car.reviews, review] }
                        : car
                    ),
            };
        }

        default:
            return state;
    }
}

// CarProvider component to wrap the app and provide car state and dispatch
export function CarProvider({ children }) {
    const [state, dispatch] = useReducer(carReducer, initialState);

    return (
        <CarContext.Provider value={{ state, dispatch }}>
            {children}
        </CarContext.Provider>
    );
}

// Custom hook to use CarContext in components
export function useCarContext() {
    return useContext(CarContext);
}