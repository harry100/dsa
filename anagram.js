const anagram = (str1, str2) => {
	let obj1 = {},
		obj2 = {}
	for (let val of str1) {
		obj1[val] = obj1[val]? (obj1[val] + 1): 1
	}
	for (let val of str2) {
		obj2[val] = obj2[val]? (obj2[val] + 1): 1
	}
	if (str1.length === str2.length) {
		for (let key in obj1) {
			console.log(key, obj1[key])
			if (obj1[key] !== obj2[key]) {
				return false
			}
		}
		return true
	} else {
		return false
	}

}
let a = anagram('abc', 'bac')
const anagram1 = (first, second) => {
	if (first.length !== second.length) return false
	let obj1 = {}
	for (let val of first) {
		obj1[val] = obj1[val]? (obj[val] + 1): 1
	}
	for (let key of second) {
		
		console.log(key, obj1[key])
		if (!obj1[key]) {
			return false
		} else {
			obj1[key] =obj1[key] - 1
		}
	}
	return true

}
let b = anagram1('mister', 'isterm')
console.log(b)
