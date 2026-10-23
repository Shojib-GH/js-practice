const nums = [1, 2, 3, 4, 5];

nums.push(6); // add to end
console.log(nums.length); // 6

nums.forEach((n) => console.log(n)); // loop

const doubled = nums.map((n) => n * 2); // new array, each item changed
const evens = nums.filter((n) => n % 2 === 0); // new array, only matches
console.log(doubled, evens);
