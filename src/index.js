import './test.css';
import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';
import Tabs from './ui/tabs';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create a dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create a tabs
const tabs = new Tabs(document.querySelector('.tabs'));
console.log(tabs);
tabs.init();