// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return (block - 42)
  } else if (block < 42) {
    return (42 - block)
  }
}

function distanceFromHqInFeet(block) {
  return (distanceFromHqInBlocks(block) * 264)
}


function distanceTravelledInFeet(num1, num2){
  if (num1 > num2) {
    return ((num1 - num2) * 264)
  } else {
    return ((num2 - num1) * 264)
  }
}

// function calculatesFarePrice(start, destination){
//   const distance  = distanceTravelledInFeet(start, destination)
//   if (distance <= 400) {
//     return 0
//   } else if (distance > 400 && distance <= 2000) {
//     return ((distance - 400) * .02)
//   } else if ((distance > 2000) && (distance < 2500)) {
//     return 25
//   } else if (distance >=2500) {
//     return 'cannot travel that far'
//   }
// }

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start,destination) <= 400) {
    return 0
  } else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) <= 2000) {
    return ((distanceTravelledInFeet(start,destination) - 400) * .02)
  } else if ((distanceTravelledInFeet(start,destination) > 2000) && (distanceTravelledInFeet(start,destination) < 2500)) {
    return 25
  } else if (distanceTravelledInFeet(start,destination) >=2500) {
    return 'cannot travel that far'
  }
}
