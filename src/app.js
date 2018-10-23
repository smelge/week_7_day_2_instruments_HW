const SelectView = require('./views/select_view.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentInfoView = require('./views/info_view.js');
const InstrumentData = require('./data/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  console.log('Element: ',selectElement);
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#content');
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instrumentInfoDisplay.bindEvents();

  const instrumentDataSource = new InstrumentFamilies(InstrumentData);
  instrumentDataSource.bindEvents();
});
