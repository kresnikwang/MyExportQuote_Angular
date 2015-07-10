'use strict';

/**
 * @ngdoc function
 * @name myexportquoteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myexportquoteApp
 */
angular.module('myexportquoteApp')
  .controller('FreightCtrl', function ($scope) {
    $scope.airQuote = function(){
      var airRate = document.getElementById("airRate").value;
      var NoCS = document.getElementById("NoCS").value;
      var NoPS = document.getElementById("NoPS").value;
      var weightPerCase = document.getElementById("weightPerCase").value;
      var trucking = document.getElementById("trucking").value;
      var coolGuard = document.getElementById("coolGuard").value;
      var otherPalletCharge = document.getElementById("otherPalletCharge").value;
      var temperRecorder = document.getElementById("temperRecorder").value;
      var documentFee = document.getElementById("documentFee").value;
      var phytoFee = document.getElementById("phytoFee").value;
      var otherCharge = document.getElementById("otherCharge").value;
      var finalResult = document.getElementById("finalResult");
      var totalCost;
      var costPerCase;


      if(document.getElementById("looseRate").checked) {
        totalCost = airRate * weightPerCase * NoCS * NoPS + NoPS * trucking + NoPS * coolGuard + NoPS * otherPalletCharge + 1 * temperRecorder + 1 * documentFee + 1 * phytoFee + 1 * otherCharge;

        // + temperRecorder + documentFee + phytoFee + otherCharge
        //1 * temperRecorder + 1 * documentFee + 1 * phytoFee + 1 * otherCharge

        if (NoCS > 0 && NoPS > 0) {
          costPerCase = totalCost / (NoCS * NoPS);
        }
      }
	  else if(document.getElementById("LD3").checked){
		  if (NoPS > 2) alert("LD3 CANNOT FIT MORE THAN 2 PALLETS");
        totalCost = airRate * 1 + + NoPS * trucking;
        
        if (NoCS > 0 && NoPS > 0) {
          costPerCase = totalCost / (NoCS * NoPS);
        }
      }
      else if(document.getElementById("LD7").checked){
		  if (NoPS > 6) alert("LD3 CANNOT FIT MORE THAN 6 PALLETS")
        totalCost = airRate * 1 + + NoPS * trucking;
        
        if (NoCS > 0 && NoPS > 0) {
          costPerCase = totalCost / (NoCS * NoPS);
        }
      }
		finalResult.value = "Freight Cost/Case: $"+costPerCase.toFixed(2)+"\nTotal Cost: $"+ totalCost.toFixed(2);
    };

  });
