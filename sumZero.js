const sumZero = (arr) => {
	console.log(arr.length)
	for (let i=0;i<arr.length;i++) {
		for (let j=arr.length-1;j>=0;j++) {
			if (arr[i] + arr[j] === 0) {
				console.log(arr[i], arr[j])
				console.log(arr[i] + arr[j])
				return [arr[i],arr[j]]
			}
		}
	}
}

const sumZeroRefactor = (arr) => {
	let left = 0
	let right = arr.length - 1

	while(left < right) {
		let sum = arr[left] + arr[right]
		if (sum > 0) {
			right -= 1
		} else if (sum < 0) {
			left += 1
		} else {
			return [arr[left], arr[right]]
		}
	}
}

let d = sumZeroRefactor([-1,-2,0,1,2])
console.log(d)
