import React from 'react';
import MapViewDirections from "react-native-maps-directions";
import getDirections from 'react-native-google-maps-directions'

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyC5-gI3RY5tfsW2l1_4SPpBWCTnTYpoq6c"
      strokeWidth={3}
      strokeColor="#222"
    />
  );

export default Directions;
