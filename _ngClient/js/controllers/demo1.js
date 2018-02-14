 
angularnodeApp.controller('Demo1Ctrl', ['$scope' ,  'jsonModels', 
		function($scope, jsonModels  ) {
 
		$scope.allStocks = jsonModels.get();	 // copy the stocks from the service (and later the cloud)
		
		// once we have the data in allStocks we are going to process it to put in totals for the presenation.
		
		// It might make sense to store the totals with the data when saving in a real system, but update as
		// necessary when accessing the data
		
		// we are going to generate new data for each entry in held based on the current share price = cpps
		// value and selling costs etc.
		
		// proof of concept only here 
		
		// we need to write function(s) to generate totals and then call the function(s)
		
		
		function sumQuantity() //  this may not be the best place in the architecture for this code!
		{
			// for each stock holding, sum the total number of shares remaining
			
			// we have to access each stock and then process any of its held records and then store the total
			// back on the relevant portion of the structure, Object.keys will give a list of the keys = symbols.
			
			var stockSymbols = Object.keys($scope.allStocks );
			
			// iterate each stock 
			var tempStock;
			stockSymbols.forEach(aStockSymbol =>
			{
				console.log(aStockSymbol)
				// get the data of aStockSymbol
				tempStock = $scope.allStocks[aStockSymbol]; // copy to tempStock so we can work on it
				var i;
				var qtyTotal = 0;
				for (i = 0; i < tempStock.held.length; i++)
				{
					// generate a value to go on each row for a stock entry
					tempStock.held[i].nowValue = (tempStock.held[i].number * tempStock.held[i].pps ).toFixed(2);
					// generate a cumulative total to be used at the end of all the stock lines
					qtyTotal = qtyTotal + tempStock.held[i].number;  // for the total row
				}
				// store the total back on the object to access in the html
				$scope.allStocks[aStockSymbol].totalQuantity = qtyTotal;
				console.log(tempStock);
			});
			
			
		}
		
		sumQuantity(); // run the function

 
	}]); // Demo1Ctrl
	
 
 	
	 