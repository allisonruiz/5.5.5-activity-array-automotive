class Vehicle {
    constructor(brand, model, color, interior, year, degree, speed, fuel){
      this.brand = brand;
      this.model = model;
      this.color = color;
      this.interior= interior;
      this.year = year;
      this.degree= degree;
      this.speed = speed;
      this.fuel = fuel;

      //state:
      this.topLowered = false;

    }
    lowerTop() {
        console.log("test")
      if (this.degree > 73) {
        console.log("lower the convertible top")
        this.topLowered = true;
      } else {
        console.log("convertible top was not lowered")
        this.topLowered = false;
      }
    }
    checkTop(){
        console.log(this.topLowered)
    }
    changeDegree(newDegree) {
        this.degree = newDegree
    }
    changeFuel(newFuel) {
        this.fuel = newFuel
    }
    volumeUp() {
        this.speed = speed;
        this.fuel= fuel;
      if (this.topLowered) {
        if (this.degree > 73) {
          console.log(this.speed += 1);
          this.fuel = this.fuel - 1;
        } else {
          console.log("conserve fuel.");
          this.cruise();
        }
      } else {
        alert("Airbag light on");
      }
    }
  }
  
  const car1 = new Vehicle(
      "Subaru", 
      "Forester", 
      "Cool Grey Khaki", 
      "white", 
      2022, 
      83)
  console.log()
  car1.lowerTop()
  car1.checkTop()

  const car2 = new Vehicle (
      "Toyota",
      "Solara",
      "Yellow",
      "beige",
      2008,
      90
  )
  console.log()
  car2.lowerTop()
  car2.checkTop()

  const car3 = new Vehicle (
      "BMW",
      "2 Series",
      "Sparkly white",
      "tan",
      2018,
      72
  )
  console.log()
  car3.lowerTop()
  car3.checkTop()

  const car4 = new Vehicle (
      "Ford",
      "Bronco",
      "Sky Blue",
      "Tan",
      1968,
      75
  )
  console.log()
  car4.lowerTop()
  car4.checkTop()

  const car5 = new Vehicle (
      "Suzuki",
      "Samurai",
      "red",
      "black",
      1987,
      103
  )
  console.log()
  car5.lowerTop()
  car5.checkTop()