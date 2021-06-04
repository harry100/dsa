function charCount(str) {
	let countObj = {}
	let i = 0
	for (let char of str) {
		char = char.toLowerCase()
		if (/[a-z0-9]/.test(char)){
			countObj[char] = ++countObj[char] || 1
		}
	}

	return countObj

}

let results = charCount('!@=.aabcA')
console.log(results)

