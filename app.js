'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerCustomer: 6.3,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: [],
};

pike.randomCustomerPerHour = function() {
  return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

pike.cookiesPerHourCalc = function() {
  for(var i = 0; i < 15; i++) {
    return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
  }
};

pike.totalCookiesCalc = function() {
  var x = 0;
  for(let i = 0; i < this.cookiesPerHour.length; i++) {
    x = x + this.cookiesPerHour[i];
  }
  return x;
};

for(var i = 0; i < 14; i++) {
  pike.cookiesPerHour.push(pike.cookiesPerHourCalc());
}

for(let i = 0; i < 14; i++) {
  pike.customerPerHour.push(pike.randomCustomerPerHour());
}

pike.totalCookies.push(pike.totalCookiesCalc());

pike.render = function() {
  var pikeUlEl = document.getElementById('pike');
  for(let i = 0; i < this.customerPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.cookiesPerHour();
    
  }
};

var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPerCustomer: 1.2,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: [],
};

seaTac.randomCustomerPerHour = function() {
  return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

seaTac.cookiesPerHourCalc = function() {
  for(var i = 0; i < 15; i++) {
    return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
  }
};

seaTac.totalCookiesCalc = function() {
  var x = 0;
  for(let i = 0; i < this.cookiesPerHour.length; i++) {
    x = x + this.cookiesPerHour[i];
  }
  return x;
};

for(let i = 0; i < 14; i++) {
  seaTac.cookiesPerHour.push(seaTac.cookiesPerHourCalc());
}

for(let i = 0; i < 14; i++) {
  seaTac.customerPerHour.push(seaTac.randomCustomerPerHour());
}

seaTac.totalCookies.push(seaTac.totalCookiesCalc());

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  cookiesPerCustomer: 3.7,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: [],
};

seattleCenter.randomCustomerPerHour = function() {
  return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

seattleCenter.cookiesPerHourCalc = function() {
  for(var i = 0; i < 15; i++) {
    return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
  }
};

seattleCenter.totalCookiesCalc = function() {
  var x = 0;
  for(let i = 0; i < this.cookiesPerHour.length; i++) {
    x = x + this.cookiesPerHour[i];
  }
  return x;
};

for(let i = 0; i < 14; i++) {
  seattleCenter.cookiesPerHour.push(seattleCenter.cookiesPerHourCalc());
}

for(let i = 0; i < 14; i++) {
  seattleCenter.customerPerHour.push(seattleCenter.randomCustomerPerHour());
}

seattleCenter.totalCookies.push(seattleCenter.totalCookiesCalc());

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  cookiesPerCustomer: 2.3,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: [],
};

capitolHill.randomCustomerPerHour = function() {
  return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

capitolHill.cookiesPerHourCalc = function() {
  for(var i = 0; i < 15; i++) {
    return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
  }
};

capitolHill.totalCookiesCalc = function() {
  var x = 0;
  for(let i = 0; i < this.cookiesPerHour.length; i++) {
    x = x + this.cookiesPerHour[i];
  }
  return x;
};

for(let i = 0; i < 14; i++) {
  capitolHill.cookiesPerHour.push(capitolHill.cookiesPerHourCalc());
}

for(let i = 0; i < 14; i++) {
  capitolHill.customerPerHour.push(capitolHill.randomCustomerPerHour());
}

capitolHill.totalCookies.push(capitolHill.totalCookiesCalc());

var alkiBeach = {
  minCustomers: 2,
  maxCustomers: 16,
  cookiesPerCustomer: 4.6,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookies: [],
};

alkiBeach.randomCustomerPerHour = function() {
  return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

alkiBeach.cookiesPerHourCalc = function() {
  for(var i = 0; i < 15; i++) {
    return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
  }
};

alkiBeach.totalCookiesCalc = function() {
  var x = 0;
  for(let i = 0; i < this.cookiesPerHour.length; i++) {
    x = x + this.cookiesPerHour[i];
  }
  return x;
};

for(let i = 0; i < 14; i++) {
  alkiBeach.cookiesPerHour.push(alkiBeach.cookiesPerHourCalc());
}

for(let i = 0; i < 14; i++) {
  alkiBeach.customerPerHour.push(alkiBeach.randomCustomerPerHour());
}

alkiBeach.totalCookies.push(alkiBeach.totalCookiesCalc());
// const randomCustomerPerHour = function(location) {
//   return Math.floor( Math.random() * (location.maxCustomers - location.minCustomers) + location.minCustomers);
// };

// const cookiesPerHourCalc = function(location) {
//   for(var i = 0; i < 15; i++) {
//     return location.cookiesPerHour.push(Math.floor(randomCustomerPerHour(location) * location.cookiesPerCustomer));
//   }
// };

// const totalCookiesCalc = function(location) {
//   for(var i = 0; i < 15; i++) {
//     return location.totalCookies.push(cookiesPerHourCalc(location));
//   }
// };

// const dailyTotalCalc = function(location) {
//   for(var i = 0; i < location.totalCookies.length; i++) {
//     i + location.totalCookies[i][1];
//   }
// };

// randomCustomerPerHour(pike);
// console.log(randomCustomerPerHour(pike));
// cookiesPerHourCalc(pike);
// console.log(cookiesPerHourCalc(pike));
// totalCookiesCalc(pike);
// console.log(totalCookiesCalc(pike));
// pike.dailyTotal.push(dailyTotalCalc(pike));
// console.log(pike.dailyTotal.push(dailyTotalCalc(pike)));