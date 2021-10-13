const Manager = require("../lib/Manager");

test("Does this return an office number", () => {
    const emp = new Manager("Korey", 100, "name.email", "officeNumber");
    expect(emp.officeNumber).toBe("officeNumber");
});

test("Does this return a an office number", () => {
    const emp = new Manager("Korey", 100, "name.email", "officeNumber");
    expect(emp.getOfficeNumber()).toBe("officeNumber");
});

test("Does this return a role for Manager", () => {
    const emp = new Manager("Korey", 100, "name.email", "officeNumber");
    expect(emp.getRole()).toBe("Manager");
});