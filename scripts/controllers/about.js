angular.module('demoApp')
    .controller('AbtCtrl', ['$scope','$rootScope',
	function($scope,$rootScope){
		
		var highlights = ["Born","10th Grade","High School","Under Graduate","Post Graduate"]
		var highlightDate = ["11-July-1994","April-2009","March-2011","May-2015","In Progress"]
		var highlightLocation = ["Hometown, Chennai","B.C.S Jain Matriculation Hr. Sec. School, Royapuram, Ch-21","K.C.Sankaralinga Nadar Hr. Sec. School, Old Washermenpet, Ch-21","Jerusalem College of Engineering, Affiliated to Anna University, Ch-100","Work Integrated Learning Program, BITS Pilani, Rajasthan"]
		var highlightClass = ["","timeline-inverted","timeline-inverted","",""]
		var highlightColor = ["primary","danger","danger","warning","warning"]
		var highlightIcon = ["fa-home","fa-book","fa-book","fa-bookmark","fa-bookmark"]
		
		
		var detailInfo = []
		for(var hl in highlights){
			detailInfo.push({
				"info": highlights[hl],
				"date" : highlightDate[hl],
				"location" : highlightLocation[hl],
				"class" : highlightClass[hl],
				"color" : highlightColor[hl],
				"icon" : highlightIcon[hl]
			})
		}
		
		
		$scope.durationData = detailInfo
		//console.log("Abt Controler")
			
	}]);