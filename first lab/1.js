//first function

function range(end) {
    return Array.apply(null, {length: end}).map(Number.call, Number);
}

console.log("first function:", range(5));

//second function

function isDivided(div1, div2, num){
   return (num % div1 === 0) && (num % div2 === 0);      
}
console.log("second function:");
const arrays = [[-12, 2, -6], [-12, 2, -5], [45, 1, 6], [45, 5, 15], [4, 1, 4], [15, -5, 3]];
arrays.forEach(a => console.log(`${a} ====> ${isDivided(a)}`));

//third function

function capFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  const str = "work";
  console.log(`third fucntion: ${str} ===> ${capFirst(str)}`);  
