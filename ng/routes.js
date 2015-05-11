angular.module('appLearn').config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        controller: 'ProductesController',
        templateUrl: 'producte.html',
        autoritzat: false
    }).when("/botigues", {
        controller: 'BotiguesController',
        templateUrl: 'botiga.html',
        autoritzat: false
    }).when("/editarBotiga", {
        controller: 'Editabotigacontroller',
        templateUrl: 'editarbotiga.html',
        autoritzat: false
    }).when("/nouproducte", {
        controller: 'Nouproductecontroller',
        templateUrl: 'creaproducte.html',
        autoritzat: false
    }).when("/novabotiga", {
        controller: 'Novabotigacontroller',
        templateUrl: 'crearbotiga.html',
        autoritzat: false
    }).when("/editarProducte", {
        controller: 'Editaproductecontroller',
        templateUrl: 'editarproducte.html',
        autoritzat: false
    }).when("/registre", {
                controller: "RegisterController",
                templateUrl: "registre.html",
                autoritzat: false
    }).when("/login", {
                controller: "LoginController",
                templateUrl: "login.html",
                autoritzat: false
    }).when("/registre", {
                controller: "RegistreController",
                templateUrl: "registre.html",
                autoritzat: false
    }).otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}) .run(function($rootScope,UserSvc) {
        /*
            Cada vegada que canviem de pàgina se dispara el
            event $routeChangeStart,
            Si la pàgina que volem veure té la propietat 
            "autoritzat": a true i no ho està llavors no 
            farà el canvi
        */
        $rootScope.$on('$routeChangeStart', function(event, next) {
           if (next)
                if (!UserSvc.auth & next.autoritzat) 
                    event.preventDefault();
        });
});