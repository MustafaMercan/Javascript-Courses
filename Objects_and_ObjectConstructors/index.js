/*

Object Constructors: An object constructor is a function used to create and initialize objects. It serves as a blueprint or template for creating 
multiple instances of similar objects.

Creating Instances: To create an instance of an object constructor, you use the new keyword followed by the constructor function's name and any 
necessary arguments. This process is called instantiation.

Properties: Object constructors define properties that store data within each instance of the object. These properties can be assigned values using 
the this keyword within the constructor function.

Methods: Object constructors can also define methods, which are functions associated with each instance of the object. Methods can access and manipulate 
the object's properties using the this keyword.

Prototype: The prototype is an object shared among all instances of an object constructor. It contains properties and methods that can be accessed by all 
instances through prototype chaining. The prototype is accessible using the prototype property of the constructor function.

Inheritance: Object constructors support inheritance through the prototype chain. By modifying the prototype of an object constructor, you can enable 
instances to inherit properties and methods from another constructor's prototype.

Instanceof Operator: The instanceof operator is used to check if an object is an instance of a specific constructor function. It returns true if the 
object is an instance, and false otherwise.

*/


/*

Task: Creating a Book Catalog


Your task is to create an object constructor for a Book that will represent individual books in a catalog. Each book will have properties like title, author,
and publication year. Additionally, you need to define a method that displays the book's information.


steps -> 

Create an object constructor function called Book that takes three parameters: title, author, and year. Inside the constructor, assign these parameters 
as properties to the newly created object using the this keyword.

Define a method called displayInfo on the Book constructor's prototype. This method should log the book's information 
(e.g., "Title: [title], Author: [author], Year: [year]") to the console.

Create three instances of Book with different titles, authors, and publication years.

Call the displayInfo method on each book instance to verify that the book's information is correctly displayed.
*/

/*
function Book (title,author,year) {
    this.title = title
    this.author = author
    this.year = year
    
}

Book.prototype.getInfo = function(){
    return {
        title:this.title,
        author:this.author,
        year: this.year
    }
}

const myBook = new Book("Death of Ivan Ilyic","Tolstoy",2000);

console.log(myBook.getInfo())
*/



/*
In JavaScript, the prototype is an object that every constructor function has by default. It is used to enable property and method inheritance in JavaScript.


Here are the key points to understand about prototypes:

Constructor Function: When you create a constructor function (e.g., function Book() { ... }), JavaScript automatically assigns a prototype object to it.

Prototype Object: The prototype object is an ordinary JavaScript object. It initially has no properties or methods, but you can add them to the prototype
using dot notation or assignment.

Inheritance: The prototype object is shared among all instances created by the constructor function. It allows instances to inherit properties and methods 
defined on the prototype.

Accessing the Prototype: You can access the prototype object of a constructor function using the prototype property. For example, Book.prototype refers to 
the prototype object of the Book constructor.

Prototype Chain: When you access a property or method on an instance of a constructor function, JavaScript first checks if the instance itself has that 
property or method. If not, it looks up the prototype chain to the prototype object and checks if it has the property or method. This continues until the 
property or method is found or the end of the prototype chain is reached.

Modifying the Prototype: You can add properties and methods to the prototype object even after instances have been created. Any new instances or existing 
ones will have access to the updated prototype.

Efficiency: Using the prototype to define shared properties and methods improves memory efficiency because those properties and methods are not duplicated 
for each instance. Instead, they are shared through the prototype chain.



You can use prototypes in JavaScript for several reasons:

Inheritance: Prototypes enable inheritance in JavaScript. By adding properties and methods to the prototype object of a constructor function, 
all instances created by that constructor can inherit those properties and methods. This allows you to define common behavior or share functionality 
among multiple objects.

Memory Efficiency: Using prototypes allows you to share properties and methods among instances. Instead of duplicating the same properties and methods 
for each instance, they are stored in the prototype object, reducing memory consumption.

Runtime Updates: Prototypes provide a way to add or modify properties and methods dynamically. You can add new properties or methods to the prototype 
even after instances have been created, and all instances will have access to the updated prototype.

Performance: Accessing properties and methods via the prototype chain can be faster than accessing them directly on each instance. Since the properties 
and methods are shared through the prototype, the lookup process is optimized for efficiency.

Code Organization: Using prototypes can help you keep your code organized and separate instance-specific data from shared behaviors. You can define 
instance-specific properties within the constructor function, while shared properties and methods can be added to the prototype.

Extensibility: Prototypes allow you to extend the functionality of existing objects easily. You can add new methods or override existing ones by 
modifying the prototype, and all instances will inherit the updated behavior.

Overall, prototypes provide a powerful mechanism for creating reusable objects, enabling inheritance, and optimizing memory and performance in JavaScript. 
They play a crucial role in the language's object-oriented programming model and provide flexibility and extensibility to your code.
*/


/*
The Object.getPrototypeOf() method is a built-in method in JavaScript that allows you to retrieve the prototype of an object. It returns the prototype 
of the specified object.
*/

/*
function Person(){}
const person = new Person()

console.log(Object.getPrototypeOf(person) === Person.prototype)
*/

/*


Prototypal inheritance is a key concept in JavaScript that allows objects to inherit properties and methods from other objects. In JavaScript, objects 
can have a  prototype object from which they inherit properties and methods.


Here's how prototypal inheritance works:

Prototype Chain: Each object in JavaScript has an internal link to its prototype object. This forms a chain of objects, known as the prototype chain. 
The prototype chain allows objects to inherit properties and methods from their prototype objects.

Object Prototypes: Every object in JavaScript, except for the base object (Object.prototype), has a prototype object. The prototype object serves as a 
blueprint or template for creating new instances of that object type. It contains shared properties and methods that are inherited by instances.

Constructor Functions: Constructor functions are used to create objects with shared properties and methods. When an object is created using a constructor 
function and the new keyword, the prototype property of the constructor function becomes the prototype of the newly created object.

Inheritance and Property Lookup: When you access a property or method on an object, JavaScript first checks if the object itself has that property or method. 
If not, it looks up the prototype chain to the prototype object and checks if it has the property or method. This process continues until the property or 
method is found or the end of the prototype chain is reached.

Modifying Prototypes: You can add or modify properties and methods on the prototype object, and those changes will be reflected in all instances that 
inherit from that prototype. This allows for dynamic updates and shared behavior among objects.
*/

/*
const person = {
    name: "Mustafa"
}
const sayName = {
    sayName() {
        console.log(`Hello my name is ${this.name}`)
    }
}

Object.setPrototypeOf(person,sayName);
person.sayName()*/

/*
function Hero (name,level){
    this.name = name,
    this.levelt = level
}

Hero.prototype.greet = function(){
    console.log(`${this.name} say hello`)
}

function Warrior(name, level, weapon){
    Hero.call(this,name,level)
    this.weapon = weapon
}

function Healer(name, level, spell){
    Hero.call(this, name, level)
    this.spell = spell
}


Warrior.prototype.attack = function(){
    console.log(`${this.name} attacks with ${this.weapon}`)
}
Healer.prototype.heal = function(){
    console.log(`${this.name} casts with ${this.spell}`)
}


const hero1 = new Warrior('Garen', 1, 'Sword')
const hero2 = new Healer('Soraka', 1, 'Cure');


console.log(hero1)
console.log(hero2)
hero1.attack()
hero2.heal()

//hero1.greet() error because of prototype properties and methods are not automatically linked when you use call() to chain constructors.
//so we will use Object.setPrototypeOf() to link properties in the Hero constructor to the Warrior and Healer constructors.

Object.setPrototypeOf(Warrior.prototype,Hero.prototype)
Object.setPrototypeOf(Healer.prototype, Hero.prototype)

hero1.greet()
hero2.greet()
*/

const cat = {
    makeSound: function(){
        console.log(this.sound)
    }
}

const mark = Object.create(cat)
mark.sound = 'meeeowww'
mark.makeSound()


const waffle = Object.create(cat)
waffle.sound = 'mewowoworaoroaowrar'
waffle.makeSound()
