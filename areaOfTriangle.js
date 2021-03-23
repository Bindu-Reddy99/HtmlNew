console.log(
  "Hello!!..Let me know whether do you want to calculate the area of triangle by using length of sides or using lenght and base height."
);
let choice = prompt("Enter your choice(SIDES or BASE_LEN");
if (choice == "SIDESS") {
  const side1 = parseInt(prompt("Enter side1: "));
  const side2 = parseInt(prompt("Enter side2: "));
  const side3 = parseInt(prompt("Enter side3: "));

  // Calculating the semi-perimeter
  const s = (side1 + side2 + side3) / 2;

  //Calculating the area
  const areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

  console.log(`The area of the triangle is ${areaValue}`);
}
if (choice == "BASE_LEN") {
  const baseValue = prompt("Enter the base of a triangle: ");
  const heightValue = prompt("Enter the height of a triangle: ");

  const areaValue = (baseValue * heightValue) / 2;

  console.log(`The area of the triangle is ${areaValue}`);
}
