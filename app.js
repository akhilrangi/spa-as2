(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  
  toBuy.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };
  
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [{ name: "cookies", quantity: 1 },
				{ name: "cookies", quantity: 2 },
				{ name: "cookies", quantity: 3 },
				{ name: "cookies", quantity: 4 },
				{ name: "cookies", quantity: 5 }];
				
  var boughtList = [];
  
  service.boughtItemsCount = function () {
    return boughtList;
  };

  service.moveItem = function (itemIdex) {
    boughtList.push(toBuyList[itemIdex]);
	toBuyList.splice(itemIdex, 1);	
  };

  service.getToBuyItems = function () {
    return toBuyList;
  };
  
  service.getBoughtItems = function () {
	return boughtList;
  };
  
}

})();
