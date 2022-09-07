//count sum of shopping checklist
const checkList = [20.5, 200, 98, 99.9, 15];
//solution

const sum = checkList.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum);