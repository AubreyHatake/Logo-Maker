// using this code to test a circle 
describe("Circle test", () => {
    test("test for a circle with a #ca00ca background", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
      );
    });
  });
