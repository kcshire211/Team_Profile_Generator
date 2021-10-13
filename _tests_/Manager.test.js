const Manager = require("../lib/Manager");

test("Does this return a Github user", () => {
    const emp = new Manager("Korey", 100, "name.email", "officeNumber");
    expect(emp.github).toBe("officeNumber");
});

test("Does this return a Github user", () => {
    const emp = new Manager("Korey", 100, "name.email", "officeNumber");
    expect(emp.getOfficeNumber()).toBe("officeNumber");
});

test("Does this return a role for Manager", () => {
    const emp = new Manager("Korey", 100, "name.email", "officeNumber");
    expect(emp.getRole()).toBe("Manager");
});