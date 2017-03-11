		var myDiv = angular.module("myapp", ['ui.router']);
		myDiv.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state("shou", {
					url: 'shou',
					views: {
						"body": {
							
							templateUrl: "index.html"
						}
					}
				})

			.state("help", {
				url: 'help',
				views: {
					"body": {
						
						templateUrl: "tmpl/help.html"
					}
				}
			})

			.state("ding", {
				url: 'ding',
					views: {
						"main": {
							
							templateUrl: "tmpl/shangpindingdan.html"
						}
					}
				})
				.state("dian", {
					url: 'dian',
					views: {
						"main": {
							
							templateUrl: "tmpl/wodedianpu.html"
						}
					}
				})
				.state("money", {
					url: 'money',
					views: {
						"body": {
							
							templateUrl: "tmpl/youchengqianbao.html"
						}
					}
				})		
				.state("chong", {
					url: 'chong',
					views: {
						"body": {
							
							templateUrl: "tmpl/pingtaichongzhi.html"
						}
					}
				})	
				.state("chong2", {
					url: 'chong2',
					views: {
						"body": {
							
							templateUrl: "tmpl/pingtaichongzhi2.html"
						}
					}
				})					
				
				.state("cha", {
					url: 'cha',
					views: {
						"body": {
							
							templateUrl: "tmpl/gengduochaxun.html"
						}
					}
				})	
				
				.state("fs", {
					url: 'fs',
					views: {
						"body": {
							
							templateUrl: "tmpl/fensiliebiao.html"
						}
					}
				})					
				.state("ti", {
						url: 'ti',
					views: {
						"body": {
						
							templateUrl: "tmpl/tixian.html"
						}
					}
				})	
				
				.state("ku", {
						url: 'ku',
					views: {
						"body": {
						
							templateUrl: "tmpl/zuopingku.html"
						}
					}
				})	
				.state("ws", {
						url: 'ws',
					views: {
						"body": {
						
							templateUrl: "我的店铺/店铺个人.html"
						}
					}
				})					
				
				.state("ping", {
					url: 'ping',
					views: {
						"body": {
							
							templateUrl: "tmpl/pinglunguanli.html"
						}
					}
				})		
				.state("look", {
					url: 'look',
					views: {
						"body": {
							
							templateUrl: "tmpl/YLDP.html"
						}
					}
				})	
				
				.state("xiao", {
					url: 'xiao',
					views: {
						"body": {
							
							templateUrl: "tmpl/xiaoxitongzhi.html"
						}
					}
				})					

		}]);
		
			
		myDiv.controller('dd', ['$scope', '$http', function($scope, $http) {
			$scope.data = [];
			$http({
				method: 'get',
				url: 'http://localhost:3000/users/queryAll?tables=indent'
			}).success(function(data) {
				console.log(data);
				$scope.data = data;
			})
		}]);
		
			
		myDiv.controller('ping', ['$scope', '$http', function($scope, $http) {
			$scope.data = [];
			$http({
				method: 'get',
				url: 'http://localhost:3000/users/queryAll?tables=discuss'
			}).success(function(data) {
				console.log(data);
				$scope.data = data;
			})
		}]);	
		
		myDiv.controller('fen', ['$scope', '$http', function($scope, $http) {
			$scope.data = [];
			$http({
				method: 'get',
				url: 'http://localhost:3000/users/queryAll?tables=fans'
			}).success(function(data) {
				console.log(data);
				$scope.data = data;
			})
		}]);	
		
		myDiv.controller('money', ['$scope', '$http', function($scope, $http) {
			$scope.data = [];
			$http({
				method: 'get',
				url: 'http://localhost:3000/users/queryAll?tables=wallet'
			}).success(function(data) {
				console.log(data);
				$scope.data = data;
			})
		}]);
		
		myDiv.controller('app', ['$scope', '$http', function($scope, $http) {
			$scope.data = [];
			$http({
				method: 'get',
				url: 'http://localhost:3000/users/queryAll?tables=information'
			}).success(function(data) {
				console.log(data);
				$scope.data = data;
			})
		}]);
		
		myDiv.controller('cha', ['$scope', '$http', function($scope, $http) {
			$scope.data = [];
			$http({
				method: 'get',
				url: 'http://localhost:3000/users/queryAll?tables=wallet'
			}).success(function(data) {
				console.log(data);
				$scope.data = data;
			})
		}]);
		
		myDiv.controller('xiao', ['$scope', '$http', function($scope, $http) {
			$scope.data = [];
			$http({
				method: 'get',
				url: 'http://localhost:3000/users/queryAll?tables=information'
			}).success(function(data) {
				console.log(data);
				$scope.data = data;
			})
		}]);