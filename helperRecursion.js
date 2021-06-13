function oddValue(nums) {
	let result = []

	function helper(n) {
		if (n.length === 0) return
		if(n[0] % 2 !== 0) {
			result.push(n[0])
		}
		helper(n.slice(1))
	}
	helper(nums)
	return result
}

const collectOddValues = (arr) => {
	let newArr = []
	if (arr.length === 0) return newArr
	if (arr[0] % 2 !== 0) newArr.push(arr[0])
	newArr = newArr.concat(collectOddValues(arr.slice(1)))
	return newArr
}
console.log(collectOddValues([1,2,3,4,5]))
