// src/App.js

import React from "react";

import Header from "./components/Header";
import Body from "./components/Body";

import "./index.css";


const AppLayout = () => {
  return (
    
      <div className="app">
        <Header />
        <Body/>
      </div>
    
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       { path: "/", element: <Body /> },
//       { path: "/about", element: <About /> },
//       { path: "/contact", element: <Contact /> },
//       { path: "/restaurants/:resId", element: <RestaurantMenu /> },
//       { path: "/cart", element: <Cart /> },
//     ],
//   },
// ]);

const App = () => {
  // return <RouterProvider router={appRouter} />;
  return <AppLayout/>
};

export default App;
