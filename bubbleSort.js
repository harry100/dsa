const bubble = (arr) => {
	for (let i=arr.length; i>=0; i--) {
		let notSwapped = true
		for (let j=0; j<i-1; j++) {
			if (arr[j] > arr[j+1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]			
				notSwapped = false
			}
		}
		if (notSwapped) break
	}
	return arr
}

console.log(bubble([1,17,15,2,5,3,1,4]))
