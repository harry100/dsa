const maxSumArray = (arr, n) => {
	if (arr.length < n) return null
	let max = 0
	for (let i=0;i<n;i++) {
		max += arr[i]
	}
	let temp = max
	for (let i=n;i<arr.length;i++) {
		temp = temp + arr[i] - arr[i-n]	
		if(temp > max) {
			max = temp
		}
	}
	return max
}
let m = maxSumArray([2,6,9,2,1,8,5,6,3], 3)
console.log(m)
