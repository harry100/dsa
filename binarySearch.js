const binarySearch = (arr, val) => {
	let left = 0
	let right = arr.length - 1

	while (left < right) {
		let middle = Math.floor((left + right)/2)
		if (arr[middle] === val) {
			return middle
		} else {
			if (val > middle) {
				left = middle
			} else right = middle
		}
	}
	return -1
}

const binarySearch1 = (arr, val) => {
	let start = 0
	let end = arr.length - 1
	let middle = Math.floor((start + end) / 2)
	
	while (arr[middle] !== val && start <= end) {
		if (val < arr[middle]) {
			end = middle - 1
		} else start = middle + 1
		middle = Math.floor((start + end) / 2)
		if (arr[middle] === val) return middle
	}
	return -1
}

console.log(binarySearch1([10,11,15,17,19,20], 17))
