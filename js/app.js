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

const playAppa = () => {
    document.getElementsByClassName('head1')[0].style.display = 'none'
    document.getElementsByClassName('head2')[0].style.display = 'none'
    document.getElementsByClassName('nagaButton')[0].style.display = 'none'
    document.getElementsByClassName('appaButton')[0].style.display = 'none'
    document.getElementById('appaImage').style.display = 'none'
    document.getElementById('nagaImage').style.display = 'none'
    eggImage = document.getElementById('egg');
    eggImage.src = "images/egg.png"
    eggImage.style.position = "absolute"
    eggImage.style.left = "260px"
}
const playNaga = () => {
    document.getElementsByClassName('head1')[0].style.display = 'none'
    document.getElementsByClassName('head2')[0].style.display = 'none'
    document.getElementsByClassName('nagaButton')[0].style.display = 'none'
    document.getElementsByClassName('appaButton')[0].style.display = 'none'
    document.getElementById('appaImage').style.display = 'none'
    document.getElementById('nagaImage').style.display = 'none'
    eggImage = document.getElementById('egg');
    eggImage.src = "images/egg.png"
    eggImage.style.position = "absolute"
    eggImage.style.right = "260px"
    eggImage.style.bottom = "0px"
}