const event= require('./events');
require('./vendor');
event.on("pick-up",(payload)=>{
    setTimeout(()=>{
    console.log(`DRIVER: Picked Up ${payload.orderid}`);
    event.emit("in-transit",(payload));
    },1000)
})
event.on("in-transit",(payload)=>{
    setTimeout(()=>{
    console.log(`DRIVER: delivered up ${payload.orderid}`);
    event.emit("delivered",(payload));
    },3000)
})


