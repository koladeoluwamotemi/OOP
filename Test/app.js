class Seacreature { // parent class
    constructor (name, habitat,type ) {
        this.name = name;
        this.habitat = habitat;
        this.type = type;
      
    }

    getSeacreatureHabitat () {

       console.log('lives in' + " " + this.habitat);
    }

    getSeacreaturename() {

        console.log(this.name);
    }

    getSeacreaturetype() {

        console.log(this.type);
    }
      
}
class greatwhiteshark extends Seacreature{ 
    constructor(name, habitat, type, numberoffins){
        super(name, habitat, type);
        this.name = name;
        this.habitat = habitat;
        this.type = type;
        this.numberoffins = numberoffins;
    }
    getNumberoffins() {

        console.log(this.numberoffins);
    }
    
}

class seabass extends Seacreature { 
    constructor(name, habitat, type, lifespan) {
        super(name, habitat, type);
        this.name = name;
        this.habitat = habitat;
        this.type = type;
        this.lifespan = lifespan;
    }
    getSeacreaturelifespan() {

        console.log(this.lifespan);
    }
   
}


class catfish extends Seacreature { 
    constructor(name, habitat, type) {
        super(name, habitat, type);
        this.name = name;
        this.habitat = habitat;
        this.type = type;
    }
  
}

//TEST

/*const spottedseabass = new seabass('sleek','saltwater','predator','10yrs');
spottedseabass.getSeacreaturelifespan();

const slimy = new catfish('jade', 'freshwater', 'prey');
slimy.getSeacreaturename();


const furo = new greatwhiteshark('zalasamel', 'freshwater', 'predator',5);
furo.getNumberoffins();
*/
module.exports = {
    catfish,
    seabass,
    greatwhiteshark,
};