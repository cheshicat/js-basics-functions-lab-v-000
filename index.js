function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
 }

 function distanceTravelledInFeet(block1, block2) {
   if (block1 >= block2) {
     return (block1 - block2) * 264;
   } else {
     return (block2 - block1) * 264;
   }
 }

 function calculatesFarePrice (block1, block2) {
   if distanceTravelledInFeet(block1, block2) < 2500 {
   } else {
     return 'cannot travel that far';
   }

 }
