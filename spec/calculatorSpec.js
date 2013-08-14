describe("Calculator", function() {
             describe("calculateResult function", function() {
                          it("should return sum of two numbers when '+' is passed as operator", function() {
                                 expect(calculateResult(3, 2, '+')).toEqual(5);
                             }
                          );
                          it("should return difference of two numbers when '-' is passed as operator", function() {
                                 expect(calculateResult(3, 2, '-')).toEqual(1);
                             }
                          );
                          it("should return product of two numbers when '*' is passed as operator", function() {
                                 expect(calculateResult(2, 3, '*')).toEqual(6);
                             }
                          );
                          it("should return quotient of two numbers when '/' is passed as operator", function() {
                                 expect(calculateResult(6, 2, '/')).toEqual(3);
                             }
                          );
                      }
                     );
             describe("returnInteger function", function() {
                          it("should return integer value when string is passed", function() {
                                 expect(returnInteger("5")).toEqual(5);
                             }
                          );
                          it("should return 'Invalid' when an invalid input is given", function() {
                                 expect(returnInteger("a")).toBe("Invalid");
                             }
                            );
                          it("should return 'Invalid' when an invalid input is given", function() {
                                 expect(returnInteger()).toBe("Invalid");
                             }
                          );
                      }
                     );
             
         }
);
