const faker = require("faker");
const event = require("./events");
require("./driver");
require('./vendor');
event.on("pick-up", (payload) => {
  console.log("Event: ", {
    event: "pick-up",
    time: new Date(faker.date.recent()).toLocaleString(),
    payload,
  });
});

event.on("in-transit", (payload) => {
  console.log("Event: ", {
    event: "in-transit",
    time: new Date(faker.date.recent()).toLocaleString(),
    payload,
  });
});
event.on("delivered", (payload) => {
  console.log("Event: ", {
    event: "delivered",
    time: new Date(faker.date.recent()).toLocaleString(),
    payload,
  });
});

