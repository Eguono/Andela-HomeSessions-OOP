'use strict';

class Laptop {

    // custom class constructor
    constructor(brand, model, oS, color) {
        this.brand = brand; //Brand of Laptop
        this.model = model; //Model of Brand
        this.operatingSystem = oS; //Operating System of Laptop
        this.productionDate = new Date();
    }

    // Simple class instance methods
    getLaptopInfo() {
        return this.brand + " " + this.model + " running on " + this.operatingSystem + " operating system";
    }
    getBrandMotto() {
        return this.brand + "..., World's Best";
    }
     //Method Demonstrates Abstration Principle
    getProductionDate() {
        return this.productionDate.toLocaleDateString();
    }
    setColor(newColor) {
        this.color = newColor;
        return this.color;
    }
    startLaptop() {
        return this.brand + " " + this.model + " is starting up !!!";
    }
}

//Demonstrates Principle of Inheritance**
class Dell extends Laptop {
    constructor(brand, model, oS) {
        // The reserved 'super' keyword is for making super-constructor
        super(brand, model, oS);
    }

    //Example Demonstrates Polymorphism
    getBrandMotto() {
        return this.brand + ", Purely You";
    }
}