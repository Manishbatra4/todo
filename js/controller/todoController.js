var appX = angular.module('boilerplate');
appX.controller('todo', ['$scope', function ($scope) {
	$scope.tasks = [];

	var taskData = localStorage['taskLists'];

	if (taskData !== undefined) {
		$scope.tasks = JSON.parse(taskData);
	}

	$scope.searchEnter = function() {
		if(event.which == 13 && $scope.task != ""){
			$scope.addTask();
		}
	};
	$scope.addTask = function () {
		$scope.tasks.push({'id': ($scope.tasks.length + 1), 'todotask': $scope.task, 'status': false, 'hide': false});
		$scope.task = '';
		localStorage['taskLists'] = JSON.stringify($scope.tasks);
	};
	$scope.checkedok = function () {
		localStorage['taskLists'] = JSON.stringify($scope.tasks);
	};
	$scope.contentEdit = function(msg) {
		for (i = 0; i<$scope.tasks.length; i++) {
			if ($scope.tasks[i].todotask == msg) {
				$scope.tasks[i].todotask = event.target.innerText;
			}
		}
		localStorage['taskLists'] = JSON.stringify($scope.tasks);
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};
	$scope.deleteTask = function (id,alltask) {
			alltask.hide = true;
			var json = JSON.parse(localStorage["taskLists"]);
			for (var i=0;i<json.length;i++){
	            if (json[i].id == id){
		            json.splice(i,1);
		            localStorage["taskLists"] = JSON.stringify(json);
	        	}
        	}
        		
	};
	$scope.enterAgain = function(msg) {
		if(event.which == 13 && msg != ""){
			$scope.contentEdit(msg);
		}	
	};
}]);