const faker = require("faker");
require("dotenv").config();
const uuid= require('uuid');
const storeName = process.env.STORE_NAME;
const event = require("./events");
setInterval(()=>{
let order = {
  storeName,
  name: faker.name.findName(),
  orderid: uuid.v4(),
  address: faker.address.streetAddress(),
};
event.emit("pick-up",order);
},5000)
event.on("delivered",(payload)=>{
  console.log(`VENDOR: Thank you for delivering ${payload.orderid}`);
})
