(function tests()
{

	document.getElementById("run-tests").addEventListener("click", runTests);

	function runTests()
	{
		handlesNonObject();
		handlesNoParameters();
		handlesMultipleParameters();
		returnsObject();
		returnsNewObject();
		handlesEmptyObject();
		keyValuesIdentical();
	}


	function handlesNonObject()
	{
		var str = "I am a string";

		try
		{
			deepClone(str);
		}
		catch(error)
		{
			document.getElementById("handles-non-object").style.backgroundColor = 'green';
			return;
		}

		document.getElementById("handles-non-object").style.backgroundColor = 'red';
	}


	function handlesNoParameters()
	{
		try
		{
			deepClone();
		}
		catch(error)
		{
			document.getElementById("handles-no-parameters").style.backgroundColor = 'green';
			return;
		}

		document.getElementById("handles-no-parameters").style.backgroundColor = 'red';
	}


	function handlesMultipleParameters()
	{
		var object1 = {
			key : 'value'
		};

		var object2 = {
			key : 'value'
		};

		try
		{
			deepClone(object1, object2);
		}
		catch(error)
		{
			document.getElementById("handles-multiple-parameters").style.backgroundColor = 'green';
			return;
		}

		document.getElementById("handles-multiple-parameters").style.backgroundColor = 'red';
	}


	function returnsObject()
	{
		var object1 = {
			key : 'value'
		};

		var returnVariable = deepClone(object1);

		if (typeof returnVariable === 'object')
		{
			document.getElementById("returns-object").style.backgroundColor = 'green';
		}
		else 
		{
			document.getElementById("returns-object").style.backgroundColor = 'red';
		}
	}


	function returnsNewObject()
	{
		/*   i.e. tests that the returned object is not actually just 
		 *   a new reference to the SAME object
		 */

		var inputObject = {
			key : 'value'
		};

		var returnedObject = deepClone(inputObject);

		if (typeof returnedObject === 'object' && inputObject !== returnedObject)
		{
			document.getElementById("returns-new-object").style.backgroundColor = 'green';
		}
		else 
		{
			document.getElementById("returns-new-object").style.backgroundColor = 'red';
		}
	}


	function handlesEmptyObject()
	{
		var emptyObject = {};

		var returnedObject = deepClone(emptyObject);

		if (typeof returnedObject === 'object' && Object.keys(returnedObject).length === 0)
		{
			document.getElementById("handles-empty-object").style.backgroundColor = 'green';
		}
		else 
		{
			document.getElementById("handles-empty-object").style.backgroundColor = 'red';
		}
	}


	function keyValuesIdentical()
	{
		var inputObject = {name: "Andy", address: {town: "Wirral", country: "United Kingdom"}};

		var returnedObject = deepClone(inputObject);

		if (JSON.stringify(inputObject) === JSON.stringify(returnedObject))
		{
			document.getElementById("key-values-identical").style.backgroundColor = 'green';
		}
		else 
		{
			document.getElementById("key-values-identical").style.backgroundColor = 'red';
		}
	}

}())