function foo (a,b){
	return a+b
}

foo(1,2)


function foo2(a,b){
	return a*b
}

function foo3(a,b){
	return a/b
}

console.log(foo3(foo(foo2(2,5),5),10))