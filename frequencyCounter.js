const same_naive = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false
	}
	for (let i =0;i<arr1.length;i++) {
		let index = arr2.indexOf(arr1[i] ** 2)
		if(index === -1){
			return false
		}
		arr2.splice(index, 1)
	}
	return true
}
let d = same_naive([1,2,3], [4,1,9])

const same = (arr1, arr2) => {
	let frequencyCounter1={}
	let frequencyCounter2={}

	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
	}

	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
	}
	for (let key in frequencyCounter1) {
		if (!(key ** 2 in frequencyCounter2)) {
			console.log('failed here')
			return false
		}
		if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
			return false
		}
	}
	return true
}

let d2 = same([1,2,3,4,1,5], [1,4,9,16,1, 11])
console.log(d2)
