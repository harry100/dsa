const selectSort = () => {
	let arr = process.argv[2].split(',').map(num => parseInt(num))
	for (let i=0; i<arr.length; i++) {
		let min = i
		for (let j=i+1; j<arr.length; j++) {
			if (arr[j] < arr[min]) {
				[arr[j], arr[i]] = [arr[i], arr[j]]
			}
		}
	}
	return arr
}
console.log(selectSort([12,1,14,345,12,143]))
