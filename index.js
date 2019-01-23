class Universe  {
    constructor(name, size) {
        this.universeName = name;
        this.universeSize = size;
    }
};

class Galaxy extends Universe {
    constructor(name, location, universe){
        super(universe.universeName, universe.universeSize);
        this.galaxyName = name;
        this.galaxyLocation = location;
    }
};

class Star extends Galaxy {
    constructor(name, stage, galaxy, universe) {
      super(galaxy.galaxyName, galaxy.galaxyLocation, universe);
      this.starName = name;
      this.starStage = stage;
    }
  };

  class Planet extends Star {
      constructor(type, shape, star, galaxy, universe){
        super(star.starName, star.starStage, galaxy, universe);
        this.planetType = type;
        this.planetShape = shape;
      }
  };

  class Continent extends Planet {
      constructor(type, area, planet, star, galaxy, universe){
          super(planet.planetType, planet.planetShape, star, galaxy, universe);
          this.continentType = type;
          this.continentArea = area;
      }
  };

  class Land extends Continent{
      constructor(climate, zone, forms, continent, planet, star, galaxy, universe){
          super(continent.continentType, continent.continentArea, planet, star, galaxy, universe);
          this.landClimate = climate;
          this.landZone = zone;
          this.landForms = forms;
      }
  };

  class Village extends Land{
      constructor(culture, type, land, continent, planet, star, galaxy, universe){
          super(land.landClimate, land.landZone, land.landForms , continent, planet, star, galaxy, universe);
          this.villageCulture = culture;
          this.villageType = type;
      }
  };

  class Family extends Village{
    constructor(value, type, village, land, continent, planet, star, galaxy, universe){
        super( village.villageCulture, village.villageType, land, continent, planet, star, galaxy, universe);
        this.familyValue = value;
        this.familyType= type;
    }
  };

  class Person extends Family {
    constructor(etnia, family, land, continent, planet, star, galaxy, universe){
        super(family.familyValue, family.familyType, land, continent, planet, star, galaxy, universe);
        this.personEtnia = etnia;
        this.personInterest = interest;
    }
  };

  class Organ extends Person {
    constructor( amount, unique, person, family, land, continent, planet, star, galaxy, universe){
        super(person.personEtnia, person.personInterest, family, land, continent, planet, star, galaxy, universe);
        this.organUnique = unique;
        this.organAmount = amount; 
    }
  };

  class Cell extends Organ {
    constructor(behavior, type, organ, person, family, land, continent, planet, star, galaxy, universe){
        super( organ.organUnique, organ.organAmount, person, family, land, continent, planet, star, galaxy, universe);
        this.cellType = type; 
        this.cellBehavior = behavior; 
    }
  };

  class Molecule extends Cell {
    constructor( reaction, type, cell, organ, person, family, land, continent, planet, star, galaxy, universe){
        super(cell.cellType, cell.cellBehavior, organ, person, family, land, continent, planet, star, galaxy, universe);
        this.moleculeType = type; 
        this.moleculeReaction = reaction;
    }
  };

  class Atom extends Molecule {
    constructor(type,mass, molecule, cell, organ, person, family, land, continent, planet, star, galaxy, universe){
        super(molecule.moleculeType, molecule.moleculeReaction, cell, organ, person, family, land, continent, planet, star, galaxy, universe);
        this.atomType = type; 
        this.atomMass = mass; 
    }
    tellStory(){
        return (
           `Here is special Atom made on ${Atom.atomType} that hit a curiously ${Molecule.moleculeReaction} reaction. ` + 
            ` When was under water his cell starting to ${Cell.cellBehavior} `
        )
    //This is a positively-charged atom in a carbon molecule. 
   //It lives in a muscle cell in the stomach of Peter. 
   //Peter belongs to the Peterson family in the village of Troy. 
   //The village of Troy is in a green land on the continent of Tropico. 
   //The continent of Tropico is on a hot planet orbiting a star that's 3 billion years old. 
   //This star is part of the Root Beer Galaxy in My Big Universe."
    }
  };
    const myUniverse = new Universe("Itadakimas ", "120");    
    const myGalaxy = new Galaxy("Intergalatica", "Next to Intercosmica", myUniverse);
    const myStar = new Star("Kusse", "White dwarf", myGalaxy, myUniverse);
    const myPlanet = new Planet("Extrasolar", "Diamond", myStar, myGalaxy, myUniverse);
    const myContinent = new Continent("Antarctica", "0", myPlanet, myStar, myGalaxy, myUniverse);
    const myLand = new Land("fresh", "Litoral", " Dived",  myContinent, myPlanet, myStar, myGalaxy, myUniverse);
    const myVillage = new Village("techRevolution","urban", myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
    const myFamily = new Family("Explorers", "Special", myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

    // I have a problems-error with Person... all on top are working....
    const myPerson = new Person("Intelectual", "Spiritual", myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

    const myOrgan = new Organ('Swimbladder', "5", myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse );
    const myCell = new Cell("Extracelular", 'Mutant', myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
    const myMolecule  = new  Molecule("Universal", "Quantitative", myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
    const myAtom = new Atom("Hydrogen","Atomic", myMolecule, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);
    
    myAtom.tellStory();

    console.log(myUniverse, myGalaxy, myStar, myPlanet, myContinent, myLand, myVillage, myFamily, ); //myPerson,myOrgan, myCell, myMolecule, myAtom



