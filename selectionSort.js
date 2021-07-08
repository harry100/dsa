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

const selectionSort = () => {
	let arr = process.argv[2].split(',').map(num => parseInt(num))
	for (let i=0; i<arr.length; i++) {
		let lowest = i
		for (let j=i+1; j<arr.length; j++) {
			if(arr[j] < arr[lowest]) {
				lowest = j
			}
		}
		if (i !== lowest) {
			let temp = arr[i]
			arr[i] = arr[lowest]
			arr[lowest] = temp
		}
	}
	return arr
}
console.log(selectionSort())
