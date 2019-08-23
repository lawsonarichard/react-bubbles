import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utlis/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { Col } from "shards-react";

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
      <Col className="bubble-page">
        <ColorList colors={colorList} updateColors={setColorList} />
      </Col>
      <Col>
        <Bubbles colors={colorList} />
      </Col>
    </>
  );
};

export default BubblePage;
