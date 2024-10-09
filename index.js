// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {  
  if (someValue<42)
    return 42-someValue
  else if (someValue>42)
    return someValue-42
  
  }

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
if (someValue<42)
  return (42-someValue)*264
else if (someValue>42)
  return (someValue-42)*264

    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    if (destination<start)
      return (start-destination)*264
    else if (destination>start)
      return (destination-start)*264
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
      // Calculate the distance in feet (1 block = 264 feet)
      const distanceInFeet = Math.abs(destination - start) * 264;
    
      // Fare calculation logic
      if (distanceInFeet <= 400) {
        // The first 400 feet are free
        return 0;
      } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        // 2 cents per foot for distance between 400 and 2000 feet
        return (distanceInFeet - 400) * 0.02;
      } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        // Flat fare of $25 for distance over 2000 feet but less than 2500 feet
        return 25;
      } else {
        // Distance greater than 2500 feet, cannot travel that far
        return 'cannot travel that far';
      }}
  