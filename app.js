var TravelModule = require('./travel');

var travel = new TravelModule();

  travel.setDepStation('Dnepr');
  travel.setDesStation('Kiev');
  travel.setNumber(230);
  travel.setDistance('503 km');
  travel.setPrice('351 UAH');
  travel.setReliability('100 %');
  travel.setBusType('Mersedes');
  travel.setRouteOfTheBus('Dnepr - Kiev');

var travel2 = new TravelModule();

  travel2.setDepStation('Dnepr');
  travel2.setDesStation('Odessa');
  travel2.setNumber(331);
  travel2.setDistance('650 km');
  travel2.setPrice('427.99 UAH');
  travel2.setReliability('99 %');
  travel2.setBusType('Mersedes');
  travel2.setRouteOfTheBus('Dnepr - Odessa');

console.log(travel.getInfoBus());
console.log(travel2.getInfoBus());
