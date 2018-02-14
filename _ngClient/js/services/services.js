
angularnodeApp.service('jsonModels', [function () {	
 
  // this is one modelling attempt at the data, it probably lends itself to the best form for a 1:1 on the UI presentation.
  // stocks is an object of objects, with an array inside the inner object
  // each internal object may be stored separately in mongodb, this is a persistence issue
  
  // each key which is a stock symbol is used to access another object which contains the details about particular shares.
  // the array held represents each purchase or remaining fragment of a purchase not sold.
  
  
  // this is a sample it is not complete,  model the data required using this template
  
  //  pps  =  price per share at time of purchase   = Cost  / number
  //  cpps =  current price per share
  
 
  var stocks = { 
				"AIBG_I" : { "Name" : "Allied Irish Banks Group", "HO": "Dublin", 
 
							"held": [ { "ts" : "20170101", "ex" : "ise" , "number" : 1000, "cost": 4500.00,  
			                 "pps" : 4.50 , "cpps" : 4.60, "nowValue": 0, "gainloss" :0, "sellingcosts" : 0},
							 
							  { "ts" : "20170102", "ex" : "ise" , "number" : 1000, "cost": 4600.00,  
			                 "pps" : 4.60 , "cpps" : 4.60, "nowValue": 0, "gainloss" :0, "sellingcosts" : 0}
							]
			 }
			 ,
				"BOI_I" : { "Name" : "Bank of Ireland", "HO": "Dublin", 
 
							"held": [ { "ts" : "20170101", "ex" : "ise" , "number" : 2000, "cost": 14000.00,  
			                 "pps" : 7 , "cpps" : 8.50, "nowValue": 0, "gainloss" :0, "sellingcosts" : 0},
							 
							  { "ts" : "20170102", "ex" : "ise" , "number" : 3000, "cost": 24000.00,  
			                 "pps" : 8 , "cpps" : 8.50, "nowValue": 0, "gainloss" :0, "sellingcosts" : 0}
							]
			 }			 
			 
 }
 
 
	function getStocks(){  
		return stocks;    // for more marks this would need to get the stocks from the server and mongodb
	}
 
	return {  // expose the service methods to consuming clients
		get :  getStocks 
	}
}]);