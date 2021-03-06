const PubSub = require('../helpers/pubsub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  console.log('Instruments: ',this.data);
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data);

  PubSub.subscribe('SelectView:change',(evt)=>{
    const selectedIndex = evt.detail;
    this.publishInstrumentDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentDetail = function(instrumentIndex){
  const selectedInstrument = this.data[instrumentIndex];
  PubSub.publish('InstrumentFamilies:selected-instrument-ready',selectedInstrument);
};

module.exports = InstrumentFamilies;
