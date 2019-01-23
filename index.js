
let store = {drivers:[],passengers: []}
let idT = 0
let idD = 0
let idP = 0
class Driver{
constructor(name,passenger){

this.name = name
this.id = ++idD
if (passenger) {
    this.userId = passenger.id;
}
store.drivers.push(this)

}
trips(){
  let x = 0
for (let i=0;i<store.passengers.length;i++){
if (this.idD == store.passengers[i].driverId){
x++
}
}
return x
}

}


class Passenger{
  constructor(name,driver){
    this.name = name
    this.id= ++idP
    if (driver) {
        this.driverId = driver.id;
    }
    store.passengers.push(this)
  }
}


class Trip{
  constructor(driver, passenger){
    this.driver =driver
    this.passenger = passenger
    this.id = ++idT
    store.trips.push(this)
    if (driver){
      this.id = passenger.id

    }
  }
}


/*
let store = {drivers:[],passengers: []}
let idD = 0
let idP = 0

class Driver{
  constructor(name,passId){
    this.name = name;
    this.idD = ++idD;
    if(passId){
      this.passId = passId.idP
    }
    store.drivers.push(this)
  }
  setPass(passId){
   this.passId = passId.idP
    }
  
 trips(){
  let x = 0
for (let i=0;i<store.passengers.length;i++){
if (this.idD == store.passengers[i].driverId){
x++
}
}
return x
}
  
   passengers(){
let drove = []
    for (let i=0;i<store.passengers.length;i++){
      if(this.idD == store.passengers[i].driverId){
        drove.push(store.passengers[i].pass)
      }
    }
    return drove
  }
}

let jojo = new Driver("jojo")
let ali = new Driver("ali")


class Pass{
  constructor(pass, driver){
    this.pass = pass
    this.idP = ++idP
    if(driver){
      this.driverId = driver.idD
    }
    store.passengers.push(this)
  }
  setDeiver(driver){
    this.driverId = driver.idD
  }
}

let sami = new Pass("sami", ali)
let khalid = new Pass("khalid", ali)
let joj = new Pass("joj", jojo)

