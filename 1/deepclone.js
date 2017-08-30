function deepClone(inputObject)
{
	
	if (typeof inputObject !== 'object')
	{
		throw 'Input parameter must be an object';
	}
	
	if (arguments.length !== 1)
	{
		throw 'deepClone must take one and only one parameter';
	}

	var clonedObject = JSON.parse(JSON.stringify(inputObject));

	return clonedObject;

}