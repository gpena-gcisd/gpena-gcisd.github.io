class GameLoop {
    #rubberDucks;
    #rubberDucksPerSecond;
    #rubberDucksPerClick;
    constructor() {
        this.#rubberDucks = 0;
        this.#rubberDucksPerSecond = 0;
        this.#rubberDucksPerClick = 1;
    }

    autoGenerateDucks() {
        this.#rubberDucks += this.#rubberDucksPerSecond;
        this.updateDuckCounter();
    }

    click() {
        this.#rubberDucks += this.#rubberDucksPerClick;
        this.updateDuckCounter();
    }

    updateDucksPerSecond(quantities, properties) {
        this.#rubberDucksPerSecond = 0;
        for (var x in quantities) {
            this.#rubberDucksPerSecond += quantities[x] * properties[x][1];
        }
    }

    updateDucksPerClick(upgrades) {
        this.#rubberDucksPerClick = 1;

        if (upgrades[quadrupleClick]) {
            this.#rubberDucksPerClick = 4;
        } else if (upgrades[tripleClick]) {
            this.#rubberDucksPerClick = 3;
        } else if (upgrades[doubleClick]) {
            this.#rubberDucksPerClick = 2;
        }
    }

    updateDuckCounter() {
        document.getElementById("ducks").innerHTML = this.#rubberDucks;
    }

    getRubberDucks() {
        return this.#rubberDucks;
    }
}

class Generators {
    #generators;
    #generatorQuantities;
    #generatorProperties;
    constructor() {
        this.#generators = ['generatorA', 'generatorB', 'generatorC'];
        this.#generatorQuantities = {generatorA: 0, generatorB: 0, generatorC: 0};
        this.#generatorProperties = {generatorA: ["carpenter", 2, 10], generatorB: ["factory", 5, 20], generatorC: ["wormhole", 20, 1000]};
    }

    //'generator' is represented as an integer
    buyGenerator(generator, game) {
        this.#generatorQuantities[this.#generators[generator]] += 1;
        game.updateDucksPerSecond(this.#generatorQuantities, this.#generatorProperties);
    }
}

class Upgrades {
    #upgrades;
    constructor() {
        this.#upgrades = {doubleClick: false, tripleClick: false, quadrupleClick: false};
    }

    activateUpgrade(upgrade, game) {
        this.#upgrades[upgrade] = true;
        game.updateDucksPerClick(this.#upgrades);
    }
}

let game = new GameLoop();
let generators = new Generators();
let upgrades = new Upgrades();

function clickDuck() {
    game.click();
}

function autoGenerateDuck() {
    game.autoGenerateDucks();
}

// set up the duck counter once
game.updateDuckCounter();
// set up the autogenerator
setInterval(autoGenerateDuck, 1000);
