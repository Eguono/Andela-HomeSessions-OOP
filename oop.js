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

}