// Code your solution in this file!
const distanceFromHqInBlocks = (distance) => {
    return Math.abs(distance - 42);
  };
  
  const distanceFromHqInFeet = (distance) => {
    return Math.abs(distance - 42) * 264;
  };
  
  const distanceTravelledInFeet = (start, destination) => {
    return Math.abs(destination - start) * 264;
  };
  
  const calculatesFarePrice = (start, destination) => {
    const distanceInFeet = Math.abs(destination - start) * 264;
    if (distanceInFeet <= 264) {
      return 0;
    }if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
      return 0.02 * (distanceInFeet - 400);
    }if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    }if (distanceInFeet > 2500) {
      return "cannot travel that far";
    }
  };
  