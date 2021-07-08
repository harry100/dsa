const selectSort = (arr) => {
	for (let i=0; i<arr.length; i++) {
		let min = arr[i]
		for (let j=i+1; j<arr.length; j++) {
			if (arr[j] < min) {
				[arr[j], arr[i]] = [arr[i], arr[j]]
			}
		}
	}
	return arr
}
console.log(selectSort([2,1,4,3,5,5,3,6,1]))
