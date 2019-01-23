
/*
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


*/



let store = {drivers:[],passengers: [], trips : []}
let idT = 0
let idD = 0
let idP = 0

class Driver{
constructor(name){
this.id = idD++
this.name = name
store.drivers.push(this)
}
trips(){
let z =  store.trips.filter(v=>v.driverId == this.id)
  return z
}
passengers(){

}
}


class Passenger{
  constructor(pass){
    this.id= idP++
    this.name = pass
    store.passengers.push(this)
  }
  trips(){

  }
  drivers(){

  }
}


class Trip{
  constructor(driver,pass){
    this.id = idT++
    this.driverId = driver.id
    this.passengerId = pass.id
    store.trips.push(this)
  }
  driver(){

  }

  passenger(){

  }
}
