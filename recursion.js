const fac = (n) => {
	let fac = 1
	for (let i=n; i>1; i--) {
		fac *= i
	}
	return fac
}

function fact(n){
	if ( n === 1 ) return 1
	return n * fact( n - 1 )
}

console.log(fact(4))
