console.log("Hello world! My name is Felix!");
process.stdout.write('Hello world! My name is Felix!');

const x = 5; 
const y = "abc"; 
const z = true;
console.log(x,y,z);

function add(a, b){
    return a+b
}
console.log(add(1,2))

const t = ["felix", "will", "heather"]

for (let i = 0; i < t.length; i++){
    console.log(t[i])
}

function bol(a){
    if (a == true){
        console.log('The truth will set you free!')
    }
    else{
        console.log('Democracy dies in darkness')
    }
}
bol(true)
bol(false)

let robot = {
name: "",
arms: 0,
legs: 0
}

console.log(robot)

class Robot{
    constructor(name, arms, legs) {
        this.name = name;
        this.arms = arms;
        this.legs = legs;
      }
    
      print_robot(){
        console.log('I am a robot! My name is '+this.name+'. I have '+this.arms+' arms and '+this.legs+' legs.')
      }
}
console.log(new Robot("ro", 2, 1))
new Robot("ro", 2, 1).print_robot()

let emoji = require('node-emoji')
console.log('I love you!'+ emoji.get('heart'))
