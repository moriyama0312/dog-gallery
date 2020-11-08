let time = 100;
const testFunction = ():Promise<number> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			time++;
			resolve(time);
		}, time);
	});
} 
const execFunc = async ():Promise<number> => {
	let result = 0;
	result = await testFunction();
	console.log(result);
	result = await testFunction();
	console.log(result);
	
	return result;
}

export default execFunc;
