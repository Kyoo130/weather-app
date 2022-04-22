import React from 'react';
import {Button} from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">서울</Button>
      <Button variant="warning">일산</Button>
      <Button variant="warning">안양</Button>
      <Button variant="warning">제주</Button>
    </div>
  );
};

export default WeatherButton;
