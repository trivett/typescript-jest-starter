import { greetPerson } from "./index";

describe("greetPerson", () => {
  it("greets", () => {
    expect(greetPerson({ firstName: "Vincent" })).toEqual(
      "Hello there, Vincent"
    );
  });

  it("greets someone with spaces in their name", () => {
    expect(greetPerson({ firstName: "Vincent Trivett" })).toEqual(
      "Hello there, Vincent Trivett"
    );
  });

  it("can greet someone like the character `5` from the Peanuts comic strip", () => {
    expect(greetPerson({ firstName: 5 })).toEqual("Hello there, 5");
  });

  it("throws when not supplied with a firstName property", () => {
    // @ts-expect-error
    expect(() => greetPerson({ lastName: "Trivett" })).toThrow(
      new Error("No first name supplied")
    );
  });
});
