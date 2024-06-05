
// Destructuring - Automatically breaks up arrays 
// and objects for assignment to variables.

// ARRAYS
{ 
    // without destructuring 
	const nums = [10, 11, 12]
	let v1 = nums[0]
	let v2 = nums[1]
	let v3 = nums[2]
}
{
	// with destructuring 
	const nums = [10, 11, 12]
	let [v1, v2, v3] = nums
	console.log(`${v1} ${v2} ${v3} `)  // 10 11 12 
}

{
	const nums = [10, 11, 12, 13, 14, 15];
	let [,v2,,,v5] = nums
	console.log(`${v2} ${v5}`)
	let [v1,,v3,v4] = nums;
	console.log(`${v1} ${v3} ${v4}`); // 1
}

//OBJECTS

interface MyObject{
	alpha: number;
	beta: string;
	foo: string;
}



{
	// without destructuring
	const obj: MyObject = { alpha: 100, beta: 'enterprise', foo: 'bar' }
	let alpha = obj.alpha
	let beta = obj.beta
}
{
	// with destructuring
	const obj: MyObject = { alpha: 100, beta: 'enterprise', foo: 'bar' }
	let {alpha, beta} = obj
	console.log(`${alpha} ${beta}`)
}
{
	const obj: MyObject = { alpha: 100, beta: 'enterprise', foo: 'bar' }
	let {alpha: num, beta: word} = obj
	console.log(`${num} ${word}`)
}
{
	// isolate particular property(s)
	const obj: MyObject = { alpha: 100, beta: 'enterprise', foo: 'bar' }
	let { foo, alpha } = obj
	console.log(`${foo} ${alpha}`)

}

// Destructuring with functions
{
	const obj: MyObject = { alpha: 100, beta: 'enterprise', foo: 'bar' }
	const  showObject = ({ alpha, beta }) => {
		console.log(`${alpha} ${beta}`)
	}
	showObject(obj)
}


