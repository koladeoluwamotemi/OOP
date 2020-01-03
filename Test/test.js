const assert = require('chai').assert;
const app = require('../app.js');

const greatwhiteshark = app.greatwhiteshark;
const catfish = app.catfish ;
const seabass = app.seabass;

const spottedseabass = new seabass('sleek', 'saltwater', 'predator', '10yrs');
spottedseabass.getSeacreaturelifespan();

const slimy = new catfish('jade', 'freshwater', 'prey');
slimy.getSeacreaturename();


const furo = new greatwhiteshark('zalasamel', 'freshwater', 'predator', 5);
furo.getNumberoffins();

