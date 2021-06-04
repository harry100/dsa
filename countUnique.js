const countUnique = (arr) => {
	let i = 0
	let j = 1
	if (arr.length === 0) return 0

	while (j < arr.length) {
		if (arr[i] !== arr[j]) {
			console.log(arr[i], arr[j])
			i += 1
			arr[i] = arr[j]
		}
		j += 1
	}
	return i + 1
}
let c = countUnique([1,1,2,2,3])
console.log(c)
