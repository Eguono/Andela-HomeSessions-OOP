'use strict';

const myApp = require('../app/Oop');

describe('Laptop Class Test', function () {
    describe('Verify Laptop is an Object and is a Constructor Object', function () {
        it("Should be an Object", function () {
            let Dell = new myApp.Laptop('Dell', 'Inspiron', 'windows', 'Black');
            expect(typeof Dell).toEqual(typeof {});
        });

        it("Should be an instance of Laptop", function () {
            let Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            expect(Dell instanceof myApp.Laptop).toBeTruthy();
        });
    });

    describe('Create a New Laptop and Call Some of its Methods', () => {
        it("Should return generic Laptop Motto", () => {
            let Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            let motto = Dell.getBrandMotto();
            expect(motto).toEqual("Dell..., World's Best");
        });

        it("should return manufacturing date", () => {
            let Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            let manufacturingDate = Dell.getProductionDate();
            expect(manufacturingDate).toEqual(Dell.getProductionDate());
        });

        it("should change Laptop Color", () => {
            let Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            let newColor = Dell.setColor('purple');
            expect(Dell.color).toEqual('purple');
        });

        it("should return basic information of the Laptop", () => {
            let Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            let laptopInfo = Dell.getLaptopInfo();
            expect(laptopInfo).toEqual('Dell Inspiron running on Windows operating system');
        });

        it("should return basic startup message", () => {
            let Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            let startLaptop = Dell.startLaptop();
            expect(startLaptop).toEqual('Dell Inspiron is starting up !!!');
        });
    });

    describe(" Dell Instance of Laptop Tests", () => {
        it("Should be an Object", () => {
            let Dell = new myApp.Dell('Dell', 'Inspiron', 'windows', 'Black');
            let motto = Dell.getBrandMotto();
            expect(motto).toEqual("Dell, Purely You");
        });
    })
});