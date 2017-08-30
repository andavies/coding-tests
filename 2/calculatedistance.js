function calculateDistance(partnerCoordinates, centralCoordinates)
{
	/*
	 * Simple formula at https://en.wikipedia.org/wiki/Great-circle_distance 
	 * used as Javascript uses double-precision 64-bit floating-point numbers.
	 */


	// scoping problems here: converting coordinates to radians seems to permanently 
	// affect the global values for londonCoordinates
	console.log(centralCoordinates);

    // convert to radians
	partnerCoordinates.forEach(function(element, index, partnerCoordinates)
	{
		partnerCoordinates[index] = partnerCoordinates[index] * (Math.PI / 180);
	});
	centralCoordinates.forEach(function(element, index, centralCoordinates)
	{
		centralCoordinates[index] = centralCoordinates[index] * (Math.PI / 180);
	});

	var centralAngle = Math.acos(
		                            Math.sin(partnerCoordinates[0]) *
		                            Math.sin(centralCoordinates[0])
		                            +
		                            Math.cos(partnerCoordinates[1]) *
		                            Math.cos(centralCoordinates[1]) *
		                            Math.cos(Math.abs(partnerCoordinates[1] - centralCoordinates[1]))
		                        );

	const earthRadius = 6371; //km

	var arcLength = centralAngle * earthRadius;

	return arcLength;
	 
};

	
	