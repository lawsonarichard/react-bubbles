import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utlis/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => {
        console.log("colors", res);
        setColorList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
