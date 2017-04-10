'use strict';

var myApp = require('../app/Oop');

describe('Laptop Class Test', function () {
    describe('Verify Laptop is an Object and is a Constructor Object', function () {
        it("Should be an Object", function () {
            var Dell = new myApp.Laptop('Dell', 'Inspiron', 'windows', 'Black');
            expect(typeof Dell).toEqual(typeof {});
        });

        it("Should be an instance of Laptop", function () {
            var Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            expect(Dell instanceof myApp.Laptop).toBeTruthy();
        });
    });

    describe('Create a New Laptop and Call Some of its Methods', function () {
        it("Should return generic Laptop Motto", function () {
            var Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            var motto = Dell.getBrandMotto();
            expect(motto).toEqual("Dell..., World's Best");
        });

        it("should return manufacturing date", function(){
            var Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            var manufacturingDate = Dell.getProductionDate();
            expect(manufacturingDate).toEqual(Dell.getProductionDate());
        });

        it("should change Laptop Color", function(){
            var Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            var newColor = Dell.setColor('purple');
            expect(Dell.color).toEqual('purple');
        });

        it("should return basic information of the Laptop", function(){
            var Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            var laptopInfo = Dell.getLaptopInfo();
            expect(laptopInfo).toEqual('Dell Inspiron running on Windows operating system');
        });

        it("should return basic startup message", function(){
            var Dell = new myApp.Laptop('Dell', 'Inspiron', 'Windows', 'Black');
            var startLaptop = Dell.startLaptop();
            expect(startLaptop).toEqual('Dell Inspiron is starting up !!!');
        });
    });

    describe(" Dell Instance of Laptop Tests", function(){
        it("Should be an Object", function () {
            var Dell = new myApp.Dell('Dell', 'Inspiron', 'windows', 'Black');
            var motto = Dell.getBrandMotto();
            expect(motto).toEqual("Dell, Purely You");
        });
    })
});