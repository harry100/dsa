function insert(arr) {
	for (let i=1; i<arr.length; i++) {
		for (let j=i-1; j>=0; j--) {
			if (arr[j] > arr[i]) {
				[arr[i], arr[j]] = [arr[j], arr[i]]
			}
		}
	}
	return arr
}
console.log(insert([2,1,5,3,7]))
