function Dog (){
    this.name = "molly";
    this.color = "brown";
    this.numLegs = 4;
}

let hound = new Dog()

function Dog1(name, color, ownerName){
    this.name = name;
    this.color = color;
    this.owner = ownerName;
    this.numLegs = 4;
}

let terrier = new Dog1("Stanly", 'black', 'daniel')
let retriver = new Dog1('hunter', 'yellow', 'steven')

console.log(`${terrier.owner} has a ${terrier.color} dog named ${terrier.name}.`)
console.log(`${retriver.owner} has a ${retriver.color} dog named ${retriver.name}.`)