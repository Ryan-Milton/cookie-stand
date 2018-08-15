'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];

var salesTable = document.getElementById('sales');

function Store(storeLocation, minCustomers, maxCustomers, cookiesPerCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.cookiesPerHour = [];
  this.totalCookies = [];
  allStores.push(this);

  this.randomCustomerPerHour = function() {
    return Math.floor( Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  };

  this.cookiesPerHourCalc = function() {
    for(let i = 0; i < 15; i++) {
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

Store.prototype.render = function() {
  var trEL = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeLocation;
  trEL.appendChild(tdEl);


  for(let i = 0; i < this.cookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent =this.cookiesPerHour[i];
    trEL.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent =this.totalCookies;
  trEL.appendChild(tdEl);

  salesTable.appendChild(trEL);
};

function makeHeaderRow() {
  var trEL = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEL.appendChild(thEl);

  for(let i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEL.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEL.appendChild(thEl);

  salesTable.appendChild(trEL);
}

function renderAllSales() {
  for(let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

makeHeaderRow();
renderAllSales();