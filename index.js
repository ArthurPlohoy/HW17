var Travel = function (){

var routeOfTheBus, number, depStation, desStation, distance, price, reliability, busType;


  this.setRouteOfTheBus = function (rou){
       routeOfTheBus = rou;
  };

  this.setNumber = function (num){
       number = num;
  };

  this.setDepStation = function (dep){
       depStation = dep;
  };

  this.setDesStation = function (des){
       desStation = des;
  };

  this.setDistance = function (dis){
       distance = dis;
  };

  this.setPrice = function (pri){
       price = pri;
  };

  this.setReliability = function (rel){
       reliability = rel;
  };

  this.setBusType = function (type){
       busType = type;
  };

  this.getInfoBus = function (){
      return {
              routeOfTheBus: routeOfTheBus,
              number: number,
              depStation: depStation,
              desStation: desStation,
              distance: distance,
              price: price,
              reliability: reliability,
              busType: busType
     };
};
};

module.exports = function (){
  var instance = new Travel();
  return instance;

};
