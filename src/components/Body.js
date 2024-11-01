import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import resList from "../utils/mockdata";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurant] = useState([
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "334476",
  //       name: "Dominos",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.8",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       id: "334477",
  //       name: "McDonals",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: "4.2",
  //     },
  //   },
  // ]);
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the search
              //update ui
              const filteresRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestaurant(filteresRes);
              setFilteredRestaurant(filteresRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
           return (
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/> </Link>
            
          );
        })}
      </div>
    </div>
  );
};

export default Body;
