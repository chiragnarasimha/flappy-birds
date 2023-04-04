import "./Bird.scss";

import React, { useEffect, useState } from "react";

const Bird = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  useEffect(() => {
    return () => {};
  }, []);

  return <div className="bird">Bird</div>;
};

export default Bird;
