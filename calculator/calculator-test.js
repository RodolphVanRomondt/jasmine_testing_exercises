const values = {
  amount: 1000,
  years: 40,
  rate: 99
}

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(values)).toEqual("82.50");
});

it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment(values)).toEqual("82.50");
});

it("should return a string", function () {
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
});

it("should return a number", function () {
  expect(parseFloat(calculateMonthlyPayment(values))).toBeInstanceOf(Number);
});