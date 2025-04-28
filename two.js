//write a function to check the type of vehicle based on the number of wheels

function checkVehicleType(wheels) {
    switch(wheels){
        case 2: return "Two-wheeler";
        case 4: return "Four-wheeler";
        default:
        return "Invalid"
    }
}