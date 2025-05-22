let basicSalary = 18000;
let DA, HRA, PF, netSalary;
if (basicSalary < 10000) {
  DA = (basicSalary * 25) / 100;
  HRA = (basicSalary * 30) / 100;
  PF = (basicSalary * 8) / 100;
} else if (basicSalary >= 10000 && basicSalary < 20000) {
  DA = (basicSalary * 20) / 100;
  HRA = (basicSalary * 25) / 100;
  PF = (basicSalary * 6) / 100;
} else if (basicSalary >= 20000 && basicSalary < 30000) {
  DA = (basicSalary * 15) / 100;
  HRA = (basicSalary * 20) / 100;
  PF = (basicSalary * 4) / 100;
} else {

  DA = (basicSalary * 10) / 100;
  HRA = (basicSalary * 15) / 100;
  PF = (basicSalary * 2) / 100;
}


netSalary = basicSalary + DA + HRA - PF;

console.log("Basic Salary: " + basicSalary);
console.log("DA: " + DA);
console.log("HRA: " + HRA);
console.log("PF: " + PF);
console.log("Net Salary: " + netSalary);
