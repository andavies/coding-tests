(function findPartners()
{

	/*
	 * I had problems fetching JSON from external link ("Origin null is not allowed by Access-Control-Allow-Origin.")
	 * and locally ("XMLHttpRequest cannot load file:///.../data.json. Cross origin requests are only supported for protocol 
	 * schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource").
	 * So, as a quick fix I've loaded partners.json (in index.html) and already assigned
	 * it to a variable partnersArray.
	 */

	const maximumDistance = 100; // km
	const londonCoordinates = [51.515419, -0.141099];	

	partnersWithinDistance = [];

	partnersArray.forEach(function(partnerObject)
	{
		if (partnerObject.hasOwnProperty('offices'))
		{
			partnerObject.offices.forEach(function(office)
			{
				var partnerCoordinates = office.coordinates.split(',');

				for (index in partnerCoordinates)
				{
					partnerCoordinates[index] = parseFloat(partnerCoordinates[index], 10);
				}				

				if (calculateDistance(partnerCoordinates, londonCoordinates) <= maximumDistance)
				{
					partnersWithinDistance.push(partnerObject);
				}
			});			
		}
	});

	// TODO: now we have the partners within the distance, display them appropriately

}());

	

