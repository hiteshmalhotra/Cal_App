// Code goes here
var app = angular.module('myApp', []);

app.controller('calculatorController', function ($scope) {

/*     $scope.drinks = [{
        id: 0,
        name: "Big Bottle",
        price: "10",
    },
    {
        id: 1,
        name: "Small Bottle",
        price: "5",
    },
    {
        id: 2,
        name: "Coffee",
        price: "6",
    },
    {
        id: 3,
        name: "Tea",
        price: "5",
    },
    {
        id: 4,
        name: "Lassi",
        price: "6",
    },
    {
        id: 5,
        name: "Frooti",
        price: "9",
    },
    {
        id: 6,
        name: "Chaach",
        price: "5",
    }];

    $scope.foods = [{
        id: 7,
        name: "Burger",
        price: "16",
    },
    {
        id: 8,
        name: "Monaco",
        price: "4",
    },
	{
        id: 9,
        name: "Parle G",
        price: "4",
    },
    {
        id: 10,
        name: "Pao Subzi",
        price: "12",
    },
    {
        id: 11,
        name: "Bread",
        price: "10",
    },
    {
        id: 12,
        name: "Frooti Bread",
        price: "8",
    },
    {
        id: 13,
        name: "Subzi",
        price: "4",
    }];
	
	
	$scope.fruits = [{
        id: 14,
        name: "Banana",
        price: "5",
    },
    {
        id: 15,
        name: "Orange",
        price: "5",
    }]; */
	
	    //Morning
	$scope.drinks = [{
        id: 1,
        name: "Parle G",
        price: "4",
    },
    {
        id: 2,
        name: "Monaco",
        price: "4",
    },
    {
        id: 3,
        name: "Tea",
        price: "5",
    },
    {
        id: 4,
        name: "Rusk",
        price: "3",
    },
    {
        id: 5,
        name: "Burger",
        price: "16",
    },
    {
        id: 6,
        name: "Jumpin",
        price: "9",
    },
	{
        id: 7,
        name: "Chaach",
        price: "4",
    }];

	//Afternoon
    $scope.foods = [{
	    id: 8,
        name: "Tea",
        price: "5",
	},
	{
        id: 9,
        name: "Jumpin",
        price: "16",
    },
	{
	    id: 10,
        name: "Rusk",
        price: "3",
	},
    {
        id: 11,
        name: "Monaco",
        price: "4",
    },
	{
        id: 12,
        name: "Parle G",
        price: "4",
    },
	{
        id: 13,
        name: "Burger",
        price: "16",
    },
	{
	    id: 14,
        name: "Thali",
        price: "27",
	},
	{
        id: 15,
        name: "Raita",
        price: "10",
    },
    {
        id: 16,
        name: "Packed Lunch",
        price: "12",
    },
    {
        id: 17,
        name: "Subzi",
        price: "4",
    },
    {
        id: 18,
        name: "Bread",
        price: "10",
    },
    {
        id: 19,
        name: "Frooti Bread",
        price: "8",
    }];
	
	//Evening
	$scope.fruits = [{
	    id: 20,
        name: "Tea",
        price: "5",
	},
	{
        id: 21,
        name: "Jumpin",
        price: "16",
    },
	{
	    id: 22,
        name: "Rusk",
        price: "3",
	},
    {
        id: 23,
        name: "Monaco",
        price: "4",
    },
	{
        id: 24,
        name: "Parle G",
        price: "4",
    },
	{
        id: 25,
        name: "Chaach",
        price: "4",
    },
	{
        id: 26,
        name: "Pakora",
        price: "6",
    },
	{
        id: 27,
        name: "Sandwich",
        price: "4",
    }];
	
	//Night
	$scope.nights = [{
	    id: 28,
        name: "Milk",
        price: "9",
	}];

    $scope.order = [];
    $scope.new = {};
    $scope.totOrders = 0;

    var url = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;

    $scope.getDate = function () {
        var today = new Date();
        var mm = today.getMonth() + 1;
        var dd = today.getDate();
        var yyyy = today.getFullYear();

        var date = dd + "/" + mm + "/" + yyyy

        return date
    };

    $scope.addToOrder = function (item, qty) {
        var flag = 0;
		var temp = 0;
		temp = parseInt(qty);

        if ($scope.order.length > 0) {

            for (var i = 0; i < $scope.order.length; i++) {
                if (item.id === $scope.order[i].id) {
					item.qty = parseInt(item.qty);
					item.qty += temp;
                    flag = 1;
                    break;
                }
            }

            if (flag === 0) {
                item.qty = 1;
            }
            if (item.qty < 2) {
                $scope.order.push(item);
            }
        } else {
            item.qty = qty;
            $scope.order.push(item);
        }
    };

    $scope.removeOneEntity = function (item) {
        for (var i = 0; i < $scope.order.length; i++) {
            if (item.id === $scope.order[i].id) {
                item.qty -= 1;
                if (item.qty === 0) {
                    $scope.order.splice(i, 1);
                }
            }
        }
    };

    $scope.removeItem = function (item) {
        for (var i = 0; i < $scope.order.length; i++) {
            if (item.id === $scope.order[i].id) {
                $scope.order.splice(i, 1);
            }
        }
    };

    $scope.getTotal = function () {
        var tot = 0;
		var id = 0;
        for (var i = 0; i < $scope.order.length; i++) {
			
			if($scope.order[i].qty === null){
				//Dont add
			}else{
				tot += ($scope.order[i].price * $scope.order[i].qty);
			}
        }
        return tot;
    };

    $scope.clearOrder = function () {
		for (var i = 0; i < $scope.order.length; i++) {
            $scope.order[i].qty=null;
        }
		$scope.order = [];
    };

    $scope.checkout = function (index) {
//        alert($scope.getDate() + " - Order Number: " + ($scope.totOrders+1) + "\n\nOrder amount: Rs " + $scope.getTotal().toFixed(2) + "\n\nPayment received. Thanks.");
        alert("Order amount: Rs " + $scope.getTotal().toFixed(2) + "\n\nPayment received. Thanks.");
        for (var i = 0; i < $scope.order.length; i++) {
            $scope.order[i].qty=null;
        }
		$scope.order = [];
        $scope.totOrders += 1;
    };

    $scope.addNewItem = function (item) {
        if (item.category === "Drinks") {
            item.id = $scope.drinks.length + $scope.foods.length + $scope.fruits.length + $scope.nights.length
            $scope.drinks.push(item)
            $scope.new = []
            $('#myTab a[href="#drink"]').tab('show')
        } else if (item.category === "Foods") {
            item.id = $scope.drinks.length + $scope.foods.length + $scope.fruits.length + $scope.nights.length
            $scope.foods.push(item)
            $scope.new = []
            $('#myTab a[href="#food"]').tab('show')
        }else if (item.category === "Fruits") {
            item.id = $scope.drinks.length + $scope.foods.length + $scope.fruits.length + $scope.nights.length
            $scope.fruits.push(item)
            $scope.new = []
            $('#myTab a[href="#fruit"]').tab('show')
        }else if (item.category === "Nights") {
            item.id = $scope.drinks.length + $scope.foods.length + $scope.fruits.length + $scope.nights.length
            $scope.nights.push(item)
            $scope.new = []
            $('#myTab a[href="#night"]').tab('show')
        }
    };	
		
	/* Start of Edit PersonExample */
	$scope.editDialog = new EditPersonDialogModel();	
	
	//Update Order List when found 0 or Null
	    $scope.doUpdate = function (model) {
        for (var i = 0; i < model.order.length; i++) 
		{
            if (model.item.id === model.order[i].id ) 
			{
				if(model.item.qty > 0)
				{
					//dont do anything
				}else{
				model.order.splice(i, 1);
				}
			}else{
			//dont delete
			}
        }
    };
	
});//End myApp

// this represents the state of the dialog: a visible flag and the person being edited
var EditPersonDialogModel = function () {
  this.visible = false;
};
EditPersonDialogModel.prototype.open = function(item,order) {
  this.item = item;
  this.order = order;
  this.visible = true;
};
EditPersonDialogModel.prototype.close = function() {
  this.visible = false;
};

app.directive('editPersonDialog', [function() {
  return {
    restrict: 'E',
    scope: {
      model: '=',
    },
    link: function(scope, element, attributes) {
      scope.$watch('model.visible', function(newValue) {
        var modalElement = element.find('.modal');
        modalElement.modal(newValue ? 'show' : 'hide');
      });
      
      element.on('shown.bs.modal', function() {
        scope.$apply(function() {
          scope.model.visible = true;
        });
      });

      element.on('hidden.bs.modal', function() {
        scope.$apply(function() {
          scope.model.visible = false;
        });
      });
      
    },
    templateUrl: 'edit-person-dialog.html',
  };
}]);