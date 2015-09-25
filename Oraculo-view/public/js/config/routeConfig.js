angular.module("oraculo").config(function($routeProvider){
	
	$routeProvider.when("/home", {
		templateUrl: "public/views/colaborador.html",
		controller: "colaboradorController",
		
		
	});

	$routeProvider.when("/detalhesColaborador/:codigo", {
		templateUrl: "public/views/detalhesColaborador.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			colaborador: function (colaboradorAPI, $route) {
				return colaboradorAPI.getColaborador($route.current.params.codigo);
			}
		}
	});


	$routeProvider.otherwise({redirectTo: "/home"});

});