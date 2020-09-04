//first function

function range(end) {
    return Array.apply(null, {length: end}).map(Number.call, Number);
}

console.log("first function:", range(5));

