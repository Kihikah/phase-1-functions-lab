function distanceFromHqInBlocks(someStreet) {
    const hqStreet = 42; 
    return Math.abs(someStreet - hqStreet);
}
function distanceFromHqInFeet(someStreet) {
    const feetPerBlock = 264; 
    return distanceFromHqInBlocks(someStreet) * feetPerBlock;
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; 
    return Math.abs(destination - start) * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free sample ride
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // $0.02 per foot after first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distance between 2000 and 2500 feet
    } else {
      return "cannot travel that far"; // If over 2500 feet
    }
}
  
  