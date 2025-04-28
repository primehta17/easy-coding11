//write a function to check if a cargo fits in a box
function doesCargoFit(boxVolume, cargoLength, cargoWidth, cargoHeight) {
    let fits=cargoLength*cargoWidth*cargoHeight;
   return (boxVolume>=fits )? true: false;
    
}
console.log(doesCargoFit(1000, 10, 10, 10));