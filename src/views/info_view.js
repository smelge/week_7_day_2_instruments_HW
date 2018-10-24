const PubSub = require('../helpers/pubsub.js');

const InstrumentInfo = function(container){
  this.container = container;
};

InstrumentInfo.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready',(evt)=>{
    const instrument = evt.detail;
    console.log('Instrument detail:',evt.detail);
    this.render(instrument);
  });
};

InstrumentInfo.prototype.render = function(instrument){
  const infoDescription = document.createElement('p');
  const infoTitle = document.createElement('h2');
  const listTitle = document.createElement('h3');
  const listArray = instrument.instruments;
  const listContent = document.createElement('ul');
  // UL element has been created, now set an ID to identify it
  listContent.setAttribute('id','instrument-list');

  infoDescription.textContent = instrument.description;
  infoTitle.textContent = instrument.name;
  listTitle.textContent = "Instruments Include:";
  listContent.textContent = "";
  this.container.innerHTML = "";
  this.container.appendChild(infoTitle);
  this.container.appendChild(infoDescription);
  this.container.appendChild(listTitle);
  this.container.appendChild(listContent);
  console.log('List Array: ',listArray)

  // locate the UL element using the id we set and assign it to a variable
  var ul = document.getElementById("instrument-list");

  // Take the array of instrument and iterate through each one
  listArray.forEach((newInstrument) => {
    // create a list element and assign the instrument to it
    const option = document.createElement('li');
    option.textContent = newInstrument;
    // append new element to the ul using th element we got earlier.
    ul.appendChild(option);
  });
};

module.exports = InstrumentInfo;
