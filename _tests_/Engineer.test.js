const Engineer = require("../lib/Engineer");

test("Does this return a Github user", () => {
    const emp = new Engineer("Korey", 100, "name.email", "GithubUser");
    expect(emp.github).toBe("GithubUser");
});

test("Does this return a Github user", () => {
    const emp = new Engineer("Korey", 100, "name.email", "GithubUser");
    expect(emp.getGithub()).toBe("GithubUser");
});

test("Does this return a role for Engineer", () => {
    const emp = new Engineer("Korey", 100, "name.email", "GithubUser");
    expect(emp.getRole()).toBe("Engineer");
});