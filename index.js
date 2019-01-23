
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



let store = {drivers:[],passengers: []}
let idT = 0
let idD = 0
let idP = 0





class Driver{
constructor(name, passenger){
this.id = idD++
this.name = name
if (passenger) {
    this.userId = passenger.id;
}
store.drivers.push(this)
}
driven(){
let x = 0
for (let i =0;i<store.trips.length;i++){
if (store.trips[i].userId == this.id){
x++
}

}
return x
}
}
