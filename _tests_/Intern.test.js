const Engineer = require("../lib/Intern");

test("Does this return a Github user", () => {
    const emp = new Intern("Korey", 100, "name.email", "school");
    expect(emp.github).toBe("school");
});

test("Does this return a Github user", () => {
    const emp = new Intern("Korey", 100, "name.email", "school");
    expect(emp.getSchool()).toBe("school");
});

test("Does this return a role for Intern", () => {
    const emp = new Intern("Korey", 100, "name.email", "school");
    expect(emp.getRole()).toBe("Intern");
});