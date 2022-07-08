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

    //Get rid of excess stuff on screen and leave with egg
    document.getElementsByClassName('head1')[0].style.display = 'none'
    document.getElementsByClassName('head2')[0].style.display = 'none'
    document.getElementsByClassName('nagaButton')[0].style.display = 'none'
    document.getElementsByClassName('appaButton')[0].style.display = 'none'
    document.getElementById('appaImage').style.display = 'none'
    document.getElementById('nagaImage').style.display = 'none'
    eggImage = document.getElementById('egg');
    eggImage.src = "images/egg.png"
    eggImage.style.position = "absolute"
    eggImage.style.left = "15%"

    //name
    const name = prompt("What would you like to name your new SkyBison?")
    appa = new Tamagotchi(name);

    var head3 = document.createElement("h3");
    document.getElementsByTagName("body")[0].appendChild(head3);
    head3.textContent = `NAME: ${appa.name} AGE: ${appa.age} HUNGER: ${appa.hunger} SLEEPINESS: ${appa.sleepiness} BOREDOM: ${appa.boredom}`
    head3.style.position= "absolute"
    head3.style.left = "300px"
    head3.style.fontSize = "20px"
    head3.style.top = "30%"

    //Create buttons on the right side of screen
    var eatButton = document.createElement("button")
    eatButton.type = "button"
    eatButton.innerHTML = "eat"
    document.getElementsByTagName("body")[0].appendChild(eatButton);
    eatButton.style.position = "absolute"
    eatButton.style.width = "400px"
    eatButton.style.height = "150px"
    eatButton.style.fontSize = "125px"
    eatButton.style.right = "25%"
    eatButton.style.bottom = "80%"
    eatButton.addEventListener("click",function() {appa.eat();})

    var playButton = document.createElement('button')
    playButton.type = "button"
    playButton.innerHTML = "play"
    document.getElementsByTagName("body")[0].appendChild(playButton);
    playButton.style.position = "absolute"
    playButton.style.width = "400px"
    playButton.style.height = "150px"
    playButton.style.fontSize = "125px"
    playButton.style.right = "25%"
    playButton.style.bottom = "55%"
    playButton.addEventListener("click",function() {appa.play();})

    var sleepButton = document.createElement('button')
    sleepButton.type = "button"
    sleepButton.innerHTML = "sleep"
    document.getElementsByTagName("body")[0].appendChild(sleepButton);
    sleepButton.style.position = "absolute"
    sleepButton.style.width = "400px"
    sleepButton.style.height = "150px"
    sleepButton.style.fontSize = "125px"
    sleepButton.style.right = "25%"
    sleepButton.style.bottom = "30%"
    sleepButton.addEventListener("click",function() {appa.sleep();})

    var exitButton = document.createElement('button')
    exitButton.type = "button"
    exitButton.innerHTML = "exit"
    document.getElementsByTagName("body")[0].appendChild(exitButton);
    exitButton.style.position = "absolute"
    exitButton.style.width = "400px"
    exitButton.style.height = "150px"
    exitButton.style.fontSize = "125px"
    exitButton.style.right = "25%"
    exitButton.style.bottom = "5%"

    //Interval scores every second
    const interval1 = setInterval(function() {
        head3.textContent = `NAME: ${appa.name} AGE: ${appa.age} HUNGER: ${appa.hunger} SLEEPINESS: ${appa.sleepiness} BOREDOM: ${appa.boredom}`
    }, 1000);

    //Interval every 5 seconds to age up
    const interval2 = setInterval(function() {
        appa.ageUp();
    }, 5000);


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

    //name
    const name = prompt("What would you like to name your new PolarBear Dog?")
    naga = new Tamagotchi(name);

    var head3 = document.createElement("h3");
    document.getElementsByTagName("body")[0].appendChild(head3);
    head3.textContent = `NAME: ${naga.name} AGE: ${naga.age} HUNGER: ${naga.hunger} SLEEPINESS: ${naga.sleepiness} BOREDOM: ${naga.boredom}`
    head3.style.position = "absolute"
    head3.style.right = "260px"
    head3.style.fontSize = "20px"
    head3.style.top = "30%"

    //Create buttons on the right side of screen
    var eatButton = document.createElement("button")
    eatButton.type = "button"
    eatButton.innerHTML = "eat"
    document.getElementsByTagName("body")[0].appendChild(eatButton);
    eatButton.style.position = "absolute"
    eatButton.style.width = "400px"
    eatButton.style.height = "150px"
    eatButton.style.fontSize = "125px"
    eatButton.style.left = "25%"
    eatButton.style.bottom = "80%"
    eatButton.addEventListener("click",function() {naga.eat();})

    var playButton = document.createElement('button')
    playButton.type = "button"
    playButton.innerHTML = "play"
    document.getElementsByTagName("body")[0].appendChild(playButton);
    playButton.style.position = "absolute"
    playButton.style.width = "400px"
    playButton.style.height = "150px"
    playButton.style.fontSize = "125px"
    playButton.style.left = "25%"
    playButton.style.bottom = "55%"
    playButton.addEventListener("click",function() {naga.play();})

    var sleepButton = document.createElement('button')
    sleepButton.type = "button"
    sleepButton.innerHTML = "sleep"
    document.getElementsByTagName("body")[0].appendChild(sleepButton);
    sleepButton.style.position = "absolute"
    sleepButton.style.width = "400px"
    sleepButton.style.height = "150px"
    sleepButton.style.fontSize = "125px"
    sleepButton.style.left = "25%"
    sleepButton.style.bottom = "30%"
    sleepButton.addEventListener("click",function() {naga.sleep();})

    var exitButton = document.createElement('button')
    exitButton.type = "button"
    exitButton.innerHTML = "exit"
    document.getElementsByTagName("body")[0].appendChild(exitButton);
    exitButton.style.position = "absolute"
    exitButton.style.width = "400px"
    exitButton.style.height = "150px"
    exitButton.style.fontSize = "125px"
    exitButton.style.left = "25%"
    exitButton.style.bottom = "5%"

     //Interval scores every second
     const interval1 = setInterval(function() {
        head3.textContent = `NAME: ${naga.name} AGE: ${naga.age} HUNGER: ${naga.hunger} SLEEPINESS: ${naga.sleepiness} BOREDOM: ${naga.boredom}`
    }, 1000);
    
    //Interval every 5 seconds to age up
    const interval2 = setInterval(function() {
        naga.ageUp();
    }, 5000);
}
