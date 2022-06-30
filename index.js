// Code your solution in this file!
const returnFirstTwoDrivers = (driverArray) => {
    //return the first two in the array
   return driverArray.slice(0,2);
};

const returnLastTwoDrivers = (driverArray) => {
    return driverArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//selectingDrivers[0]('Sally', "bob") --- Note: this allows us to access the variables 
// in the array.


const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return multiplier * fare;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driverArray, driverSelectFunc) => {
    return driverSelectFunc(driverArray);
};

// used to test the selectDifferentDrivers function above
// console.log("TESTING");
// selectDifferentDrivers(["drea", "nick", "garrett"], console.log);

// console.log(
//     selectDifferentDrivers(["drea", "nick", "garrett"], selectingDrivers[0])
// );
