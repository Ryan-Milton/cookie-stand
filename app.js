'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(storeLocation, minCustomers, maxCustomers, cookiesPerCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.cookiesPerHour = [];
  this.totalCookies = [];

  this.randomCustomerPerHour = function() {
    return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  };

  this.cookiesPerHourCalc = function() {
    for(let i = 0; i < 16; i++) {
      this.cookiesPerHour.push((Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer)));
    }
  };

  this.totalCookiesCalc = function() {
    var x = 0;
    for(let i = 0; i < this.cookiesPerHour.length; i++) {
      x = x + this.cookiesPerHour[i];
    }
    this.totalCookies.push(x);
  };
}

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 3.7);
var seattleCenter = new Store('Seattle Center', 11, 38, 2.3);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alkiBeach = new Store('Alki', 2, 16, 4.6);

pike.cookiesPerHourCalc();
seaTac.cookiesPerHourCalc();
seattleCenter.cookiesPerHourCalc();
capitolHill.cookiesPerHourCalc();
alkiBeach.cookiesPerHourCalc();

pike.totalCookiesCalc();
seaTac.totalCookiesCalc();
seattleCenter.totalCookiesCalc();
capitolHill.totalCookiesCalc();
alkiBeach.totalCookiesCalc();

console.log(pike);
console.log(seaTac);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alkiBeach);



// var pike = {
//   minCustomers: 23,
//   maxCustomers: 65,
//   cookiesPerCustomer: 6.3,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: [],
// };

// pike.randomCustomerPerHour = function() {
//   return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// };

// pike.cookiesPerHourCalc = function() {
//   for(var i = 0; i < 16; i++) {
//     return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
//   }
// };

// pike.totalCookiesCalc = function() {
//   var x = 0;
//   for(let i = 0; i < this.cookiesPerHour.length; i++) {
//     x = x + this.cookiesPerHour[i];
//   }
//   return x;
// };

// pike.render = function() {
//   var pikeUlEl = document.getElementById('pike');
//   for(let i = 0; i < this.customerPerHour.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + ': ' + pike.cookiesPerHour[i] + ' cookies.';
//     pikeUlEl.appendChild(liEl);
//   }
//   liEl.textContent = 'Total: ' + pike.totalCookies + ' cookies.';
//   pikeUlEl.appendChild(liEl);
// };

// for(var i = 0; i < 16; i++) {
//   pike.cookiesPerHour.push(pike.cookiesPerHourCalc());
// }

// for(let i = 0; i < 16; i++) {
//   pike.customerPerHour.push(pike.randomCustomerPerHour());
// }

// pike.totalCookies.push(pike.totalCookiesCalc());

// pike.render();

// var seaTac = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   cookiesPerCustomer: 1.2,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: [],
// };

// seaTac.randomCustomerPerHour = function() {
//   return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// };

// seaTac.cookiesPerHourCalc = function() {
//   for(var i = 0; i < 16; i++) {
//     return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
//   }
// };

// seaTac.totalCookiesCalc = function() {
//   var x = 0;
//   for(let i = 0; i < this.cookiesPerHour.length; i++) {
//     x = x + this.cookiesPerHour[i];
//   }
//   return x;
// };

// seaTac.render = function() {
//   var seaTacUlEl = document.getElementById('seaTac');
//   for(let i = 0; i < this.customerPerHour.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + ': ' + seaTac.cookiesPerHour[i] + ' cookies.';
//     seaTacUlEl.appendChild(liEl);
//   }
//   liEl.textContent = 'Total: ' + seaTac.totalCookies + ' cookies.';
//   seaTacUlEl.appendChild(liEl);
// };

// for(let i = 0; i < 16; i++) {
//   seaTac.cookiesPerHour.push(seaTac.cookiesPerHourCalc());
// }

// for(let i = 0; i < 16; i++) {
//   seaTac.customerPerHour.push(seaTac.randomCustomerPerHour());
// }

// seaTac.totalCookies.push(seaTac.totalCookiesCalc());

// seaTac.render();

// var seattleCenter = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   cookiesPerCustomer: 3.7,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: [],
// };

// seattleCenter.randomCustomerPerHour = function() {
//   return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// };

// seattleCenter.cookiesPerHourCalc = function() {
//   for(var i = 0; i < 16; i++) {
//     return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
//   }
// };

// seattleCenter.totalCookiesCalc = function() {
//   var x = 0;
//   for(let i = 0; i < this.cookiesPerHour.length; i++) {
//     x = x + this.cookiesPerHour[i];
//   }
//   return x;
// };

// seattleCenter.render = function() {
//   var seattleCenterUlEl = document.getElementById('seattleCenter');
//   for(let i = 0; i < this.customerPerHour.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + ': ' + seattleCenter.cookiesPerHour[i] + ' cookies.';
//     seattleCenterUlEl.appendChild(liEl);
//   }
//   liEl.textContent = 'Total: ' + seattleCenter.totalCookies + ' cookies.';
//   seattleCenterUlEl.appendChild(liEl);
// };

// for(let i = 0; i < 16; i++) {
//   seattleCenter.cookiesPerHour.push(seattleCenter.cookiesPerHourCalc());
// }

// for(let i = 0; i < 16; i++) {
//   seattleCenter.customerPerHour.push(seattleCenter.randomCustomerPerHour());
// }

// seattleCenter.totalCookies.push(seattleCenter.totalCookiesCalc());

// seattleCenter.render();

// var capitolHill = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   cookiesPerCustomer: 2.3,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: [],
// };

// capitolHill.randomCustomerPerHour = function() {
//   return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// };

// capitolHill.cookiesPerHourCalc = function() {
//   for(var i = 0; i < 16; i++) {
//     return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
//   }
// };

// capitolHill.totalCookiesCalc = function() {
//   var x = 0;
//   for(let i = 0; i < this.cookiesPerHour.length; i++) {
//     x = x + this.cookiesPerHour[i];
//   }
//   return x;
// };

// capitolHill.render = function() {
//   var capitolHillUlEl = document.getElementById('hill');
//   for(let i = 0; i < this.customerPerHour.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + ': ' + capitolHill.cookiesPerHour[i] + ' cookies.';
//     capitolHillUlEl.appendChild(liEl);
//   }
//   liEl.textContent = 'Total: ' + capitolHill.totalCookies + ' cookies.';
//   capitolHillUlEl.appendChild(liEl);
// };

// for(let i = 0; i < 16; i++) {
//   capitolHill.cookiesPerHour.push(capitolHill.cookiesPerHourCalc());
// }

// for(let i = 0; i < 16; i++) {
//   capitolHill.customerPerHour.push(capitolHill.randomCustomerPerHour());
// }

// capitolHill.totalCookies.push(capitolHill.totalCookiesCalc());

// capitolHill.render();

// var alkiBeach = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   cookiesPerCustomer: 4.6,
//   customerPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: [],
// };

// alkiBeach.randomCustomerPerHour = function() {
//   return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// };

// alkiBeach.cookiesPerHourCalc = function() {
//   for(var i = 0; i < 16; i++) {
//     return (Math.floor(this.randomCustomerPerHour() * this.cookiesPerCustomer));
//   }
// };

// alkiBeach.totalCookiesCalc = function() {
//   var x = 0;
//   for(let i = 0; i < this.cookiesPerHour.length; i++) {
//     x = x + this.cookiesPerHour[i];
//   }
//   return x;
// };

// alkiBeach.render = function() {
//   var alkiBeachUlEl = document.getElementById('alki');
//   for(let i = 0; i < this.customerPerHour.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + ': ' + alkiBeach.cookiesPerHour[i] + ' cookies.';
//     alkiBeachUlEl.appendChild(liEl);
//   }
//   liEl.textContent = 'Total: ' + alkiBeach.totalCookies + ' cookies.';
//   alkiBeachUlEl.appendChild(liEl);
// };

// for(let i = 0; i < 16; i++) {
//   alkiBeach.cookiesPerHour.push(alkiBeach.cookiesPerHourCalc());
// }

// for(let i = 0; i < 16; i++) {
//   alkiBeach.customerPerHour.push(alkiBeach.randomCustomerPerHour());
// }

// alkiBeach.totalCookies.push(alkiBeach.totalCookiesCalc());

// alkiBeach.render();
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