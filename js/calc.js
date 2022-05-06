//angular js 1
var app = angular.module('calculadoraAhorro',[]);
app.controller('calculadoraController',function($scope){
	
	$scope.ahorro=0;
	$scope.meses=0;
	$scope.tasa=0;
	$scope.total=0;
	$scope.ahorroMensual=0;
	$scope.anios=0;
	$scope.tasaAnual=0;
	
	
	$scope.calculaAnios=function(){
		$scope.anios =  parseFloat($scope.meses) / parseFloat(12);
	}
	$scope.calculaTasaAnual=function(){
		$scope.tasaAnual = parseFloat($scope.tasa) * parseFloat(12);
	}
	
	$scope.calculaAhorro=function(){
		//alert('ahorro:'+ $scope.ahorro + '\nmeses:' +  $scope.meses + '\ntasa:' + $scope.tasa );
		
		var ahorro = $scope.ahorro;
		var tasa=$scope.tasa;
		var total=0;
		
		
		tasa  = parseFloat(tasa/100.0) + 1;
		for(var i=0; i < $scope.meses; i++){
				total = (parseFloat(total) + parseFloat(ahorro) );
				total = (total * tasa);			
		}
		$scope.total = total;
		
		$scope.ahorroMensual = parseFloat($scope.total) * parseFloat($scope.tasa/100) ;
	}
});