describe("Calculator", function() {
             describe("sum function", function() {
                          it("should return sum of two numbers", function() {
                                 expect(sum(2,3)).toEqual(5);
                             }
                          );
                      }
                     );
             describe("returnInteger function", function() {
                          it("should return integer value when string is passed", function() {
                                 expect(returnInteger("5")).toEqual(5);
                             }
                          );
                          it("should throw error when an invalid/no input is given", function() {
                                 expect(returnInteger).toThrow();
                             }
                          );
                      }
                     );
         }
);
