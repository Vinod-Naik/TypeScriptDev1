/// <reference path="vendingMachine.ts" />

var machine = new vendingMachine();
machine.size = vendingMachineSize.medium;
ko.applyBindings(machine);