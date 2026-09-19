//module pattern - this pattern is used to create private and public methods and variables. It helps in encapsulating the code and avoiding global namespace pollution.

let fnc = (function(){
    let privateVar = 10; // private variable
    function privateMethod(){ // private method
        console.log("This is a private method");
    }
    return {
        publicMethod: function(){ // public method
            console.log("This is a public method");
            privateMethod(); // calling private method
            console.log(privateVar); // accessing private variable
        }
    }
})();

let Bank= (
    function(){
        let balance = 0; // private variable
        function deposit(amount){ // private method
            balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${balance}`);
        }
        function withdraw(amount){ // private method
            if(amount <= balance){
                balance -= amount;
                console.log(`Withdrew: ${amount}, New Balance: ${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        }
        return {
            depositMoney: function(amount){ // public method
                deposit(amount);
            },
            withdrawMoney: function(amount){ // public method
                withdraw(amount);
            }
        }   
    }
)();



// REVEALING MODULE PATTERN - This pattern is similar to the module pattern but it allows us to reveal only certain methods and variables to the outside world while keeping others private.
let RevealingModule = (function(){
    let privateVar = "I am private"; 
    function privateMethod(){
        console.log("This is a private method");
    }
    function publicMethod(){
        console.log("This is a public method");
        privateMethod();
        console.log(privateVar);
    }
    return {
        publicMethod: publicMethod // revealing only the public method
    }
})();

//factory pattern - This pattern is used to create objects without specifying the exact class of object that will be created. It allows for more flexibility and reusability of code.
function createProduct(name,price){
    let stock = 10 ;
    return{
        name,
        price,
        buy(qty){
            if(qty<=stock){
                stock-=qty;
                console.log(`Bought ${qty} ${name}(s), Remaining stock: ${stock}`);
            }
            else{
                console.log(`Not enough stock for ${name}. Available stock: ${stock}`);
            }
        },
        refill(qty){
            stock+=qty;
            console.log(`Refilled ${name} stock to ${stock}`);
        }
    }
}
let iphone = createProduct("iPhone", 999);
iphone.buy(2);
iphone.refill(5);

//singleton pattern - This pattern is used to create a single instance of an object and provide a global point of access to it. It ensures that only one instance of the object is created and used throughout the application.
let Singleton = (function(){
    let instance;
    function createInstance(){
        let object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();
let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true

//observer pattern - This pattern is used to create a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. It is commonly used in event handling systems.
class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }
    subscribe(user){
        this.subscribers.push(user);
    }
    unsubscribe(user){
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== user);
    }
    notify(){
        this.subscribers.forEach(subscriber => subscriber.update("YouTube Channel"));
    }

}
class User{
    constructor(name){
        this.name = name;
    }
    update(channelName){
        console.log(`${this.name} has been notified about new content on ${channelName}`);
    }
}
let channel = new YoutubeChannel();
let user1 = new User("Alice");
let user2 = new User("Bob");
channel.subscribe(user1);
channel.subscribe(user2);
channel.notify(); // This will notify all subscribers about new content