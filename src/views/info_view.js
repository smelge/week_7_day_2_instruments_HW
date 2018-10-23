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
  const listItem = document.createElement('li');
  infoDescription.textContent = instrument.description;
  infoTitle.textContent = instrument.name;
  listTitle.textContent = "Instruments Include:";
  listContent.textContent = "";
  this.container.innerHTML = "";
  this.container.appendChild(infoTitle);
  this.container.appendChild(infoDescription);
  this.container.appendChild(listTitle);
  this.container.appendChild(listContent);

  listArray.forEach((newInstrument) => {
    const option = document.createElement('li');
    option.textContent = newInstrument;
    this.container.ul.appendChild(option);
  });
};

module.exports = InstrumentInfo;
