const sumOfnN = (arr, n) => {
	if (n > arr.length) {
		return null
	}
	let max = -Infinity
	for (let i=0; i<arr.length - n; i++) {
		let s = 0;
		for (let j=0; j<n; j++) {
			s = s + arr[i + j]
		}
		if (s > max) {
			max = s
		}

	}
	return max
}
let ans = sumOfnN([1,2,3,1], 2)

const sumOfNR = (arr, n) => {	
	let sum = 0
	if (arr.length < n) return null
	for (let i=0; i< n; i++) {
		sum += arr[i]
	}
	let temp = sum
	for (let i=n; i<arr.length; i++) {
		temp = temp + arr[i] - arr[i - n]
		if (temp > sum) sum = temp
	}
	return sum
}
let ans2 = sumOfNR([1,2,3,4,5,6], 3)
console.log(ans2)
