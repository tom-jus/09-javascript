
// - La fecha de hoy
const fechaHoy = new Date()

// - La fecha de tu nacimiento
const myFecha = new Date("January 31, 1999 12:15")

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fechaHoy.getTime() > myFecha.getTime())

// - Una variable que contenga el día de tu nacimiento
console.log(myFecha.getDate())

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
console.log(myFecha.getMonth() +1)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
console.log(myFecha.getFullYear())










