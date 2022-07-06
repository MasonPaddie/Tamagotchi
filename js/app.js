class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 0;
    }

    ageUp() {
        this.age += 1;
        this.hunger += 1;
        this.boredom += 1;
        this.sleepiness += 1;
    }

    sleep() {
        this.sleepiness -= 2;
        this.boredom -= 1;
        this.hunger += 1
    }

    eat() {
        this.hunger -= 2;
        this.boredom -= 1;
        this.sleepiness += 1;
    }

    play() {
        this.boredom -= 3;
        this.hunger += 1;
        this.sleepiness += 1;
    }
}