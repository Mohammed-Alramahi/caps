'use strict';
const events = require('../events');

describe('Events order', () => {
  let order;
  let  orderObj= {
    store_name: 'Farah way',
    order_id: '12345',
    name: 'Mohammed Alramahi',
    address: 'Amman/Jordan',
  };
  beforeEach(()=> {
    order = jest.spyOn(console, 'log').mockImplementation();

  });

  afterEach(() => {
    order.mockRestore();
  });

  it('order pick-up handler', async() => {
    events.emit('pick-up',orderObj);
    await order();
    expect(order).toHaveBeenCalledWith();
  });
  it('order in-Transit handler', async() => {
    events.emit('in-transit',orderObj);
    await order();
    expect(order).toHaveBeenCalledWith();
  });
  it('order delivered handler', async() => {
    events.emit('delivered',orderObj);
    await order();
    expect(order).toHaveBeenCalledWith();
  });
});