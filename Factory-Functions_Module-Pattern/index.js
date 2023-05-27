/*Factory Function Introduction


The factory function pattern is similar to constructors, but instead of using new to create an object, factory functions simply set up and 
return the new object when you call the function. Check out this example:


const personFactory = (name,age) => {
    const sayHello = () => console.log("hello");
    return{name,age,sayHello}
}


const mustafa = personFactory("mustafa",30);

console.log(mustafa.name)
mustafa.sayHello()


Object Shorthand
A quick note about line 3 from the factory function example. In 2015, a handy new shorthand for creating objects was added into JavaScript. Without the shorthand, 
line 3 would have looked something like this:

return {name: name, age: age, sayHello: sayHello};

Put simply, if you are creating an object where you are referring to a variable that has the exact same name as the object property you’re creating, you can condense 
it like so:

return {name, age, sayHello};




Private Variables and Functions

Now that we’ve cemented your knowledge of scope in JavaScript, take a look at this example:

*/


const FactoryFunction = string => {
    const capitalizeString = () => string.toUpperCase()
    const printString = () => console.log(`------${capitalizeString()}------`)
    return {printString}
}


const taco = FactoryFunction('taco');

taco.printString();


const counterCreator = () => {
    let count = 0
    return () => {
        console.log(count++)
    }
}

const counter = counterCreator()

counter()
counter()
counter()




const Player = (name, level) => {
    let health = level * 2
    const getLevel = () => level
    const getName = () => name
    const die = () => {

        console.log(`${name} has die:(`)

    }
    const damage = x =>{
        health-=x
        if(health < 0)
            die()
    }
    const attack = enemy => {
        if(level < enemy.getLevel())
        {
            damage(1)
            console.log(`${enemy.getName()} has damaged ${name}`)
        }
        if(level >= enemy.getLevel())
        {
            enemy.damage(1)
            console.log(`${name} has damaged ${enemy.getName()}`)
        }
    }
    return {attack, damage, getLevel, getName}
}




const jimmie = Player('jim',10)
const badGuy = Player('jeff',5)

const Person = (name) => {

    const sayName = () => console.log(`My name is ${name}`)
    return {sayName}
}

/*
const Nerd = (name) => {
    const {sayName} = Person(name)
    const doSomethingNerdy = () => console.log(`Nerd stuff`);
    return {sayName,doSomethingNerdy}
}*/

const Nerd = (name) => {
    const prototype = Person(name)
    const doSomethingNerdy = () => console.log(`Nerd stuff`);
    return Object.assign({},prototype,{doSomethingNerdy})

}


const jeff = Nerd('Jeff')
jeff.sayName()
jeff.doSomethingNerdy()

/*

Modules are actually very similar to factory functions. The main difference is how they’re created.
Meet a module:
*/


const calculator = (() => {
    const add = (a,b) => a + b
    const sub = (a,b) => a - b
    const mul = (a,b) => a * b
    const div = (a,b) => a / b
    return{
        add,
        sub,
        mul,
        div
    }
})()



console.log(calculator.add(3,5))


