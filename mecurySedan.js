const VehicleModule = require('./vehicle').Vehicle

let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)