import React from "react";
import { FOOD_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, sla, cuisines, avgRating } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "gray" }}>
      
        <img
          className="rounded-lg h-[350px]"
          src={FOOD_LOGO + cloudinaryImageId}
          alt=""
        />
        <h3 className="font-bold py-5 text-xl">{name}</h3>
        <h4 className="text-lg">{cuisines.join(", ")}</h4>
        <h4 className="text-lg my-2">{avgRating} stars</h4>
        <h4 className="text-lg my-2">{costForTwo}</h4>
        {/* <h4 className="text-lg">{sla.slaString}</h4> */}
      </div>
    
  );
};

export default RestaurantCard;
