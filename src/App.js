// src/App.js
import React from "react";
import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    
      <div className="app">
        <Header />
        <Outlet/>
      </div>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu/> },
      // { path: "/cart", element: <Cart /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
  // return <AppLayout/>
};

export default App;
