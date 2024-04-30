class Person {
    constructor(name){
        this.name = name;
    }
    //funcao(metodo) dentro do objeto Person
    sayMyName(){
        return `Love your name ${this.name}`;
    }
}

module.exports = {
    Person,
}