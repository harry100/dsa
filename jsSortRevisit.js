const comparator = (a, b) => a - b

console.log([4,5,2,1,55,3].sort(comparator))

console.log(['atom', 'molecule', 'object', 'earth', 'universe', 'galaxy', 'black hole'].sort((l1, l2) => l2.length - l1.length))
