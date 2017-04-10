# Andela-HomeSessions-OOP

# OOP - Laptop Class
This is a javascript application that models a Laptop.


## Documentation and Usage

* ### Create an instance of a Laptop passing in the Laptop brand, model, operating system and colour as argument
    `var Dell = new Laptop("Dell", "Inspiron", "Windows", "Black");`
    
    You are ready to use the application, properties and methods available to the new instance => `Dell`

## Available Methods
* `getLaptopInfo()`    - Gives the Laptop brand, model, Operating System and Colour

* `getBrandMotto()`   - Gives the motto of the Laptop Brand

* `getProductionDate()`  - Gives the production date of the Laptop

* `setColor(newColor)` - Changes the color of the Laptop (Accepts a new color as an argument)

* `startLaptop()`    - Starts the laptop up


# Running Tests

* Run `npm install -g jasmine-node` to install test module globally
* Run `npm install` to install dependencies
* Run `npm start` to test oop function

* Run tests by typing "npm start" on the console 