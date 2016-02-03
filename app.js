(function(){
	var members = [
		{
			id: 1,
			name: "Apoorva",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "developer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",
		},
		{
			id: 2,
			name: "Swarup",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "lead",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",	
		},
		{
			id: 3,
			name: "Dominic",
			displayPicture: "something.src",
			discipline: "Management",
			designation: "manager",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: null,
				strength: 5
				},
				{
				name: "other teams",
				lead: null,
				manager: null,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",	
		},
		{
			id: 4,
			name: "Sneha",
			displayPicture: "something.src",
			discipline: "QA",
			designation	: "quality assurance engineer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				},
				{
				name: "xyz",
				lead: 5,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",	
		},
		{
			id: 1,
			name: "Apoorva",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "developer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",
		},
		{
			id: 2,
			name: "Swarup",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "lead",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",	
		},
		{
			id: 3,
			name: "Dominic",
			displayPicture: "something.src",
			discipline: "Management",
			designation: "manager",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: null,
				strength: 5
				},
				{
				name: "other teams",
				lead: null,
				manager: null,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",	
		},
		{
			id: 4,
			name: "Sneha",
			displayPicture: "something.src",
			discipline: "QA",
			designation	: "quality assurance engineer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				},
				{
				name: "xyz",
				lead: 5,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",	
		},
		{
			id: 1,
			name: "Apoorva",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "developer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",
		},
		{
			id: 2,
			name: "Swarup",
			displayPicture: "something.src",
			discipline: "Dev",
			designation: "lead",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",	
		},
		{
			id: 3,
			name: "Dominic",
			displayPicture: "something.src",
			discipline: "Management",
			designation: "manager",
			teams: [{
				name: "Oasis_Automation",
				lead: null,
				manager: null,
				strength: 5
				},
				{
				name: "other teams",
				lead: null,
				manager: null,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",	
		},
		{
			id: 4,
			name: "Sneha",
			displayPicture: "something.src",
			discipline: "QA",
			designation	: "quality assurance engineer",
			teams: [{
				name: "Oasis_Automation",
				lead: 2,
				manager: 3,
				strength: 5
				},
				{
				name: "xyz",
				lead: 5,
				manager: 3,
				strength: 5
				}],
			location: "Hyderabad",
			description: "blah blah blah",	
		}
	];

  	var app = angular.module('teamViewer', ['ngMaterial','ngMdIcons']);
  	
  	app.controller('TeamController', function($scope) {
    	$scope.members = members;
    	$scope.filter = {};

    	$scope.filterProperties = [];
    	
    	var filterProperty = {};
    	filterProperty.displayName = 'All';
    	filterProperty.actualName = 'all';
    	$scope.filterProperties.push(filterProperty);

    	$scope.filter.model = 'all';


    	var filterProperty = {};
    	filterProperty.displayName = 'Name';
    	filterProperty.actualName = 'name';
    	$scope.filterProperties.push(filterProperty);

    	var filterProperty = {};
    	filterProperty.displayName = 'Discipline';
    	filterProperty.actualName = 'discipline';
    	$scope.filterProperties.push(filterProperty);

    	var filterProperty = {};
    	filterProperty.displayName = 'Designation';
    	filterProperty.actualName = 'designation';
    	$scope.filterProperties.push(filterProperty);

    	var filterProperty = {};
    	filterProperty.displayName = 'Location';
    	filterProperty.actualName = 'location';
    	$scope.filterProperties.push(filterProperty);

    	var filterProperty = {};
    	filterProperty.displayName = 'Team';
    	filterProperty.actualName = 'teams';
    	$scope.filterProperties.push(filterProperty);

    	//groups functionality
    	$scope.groups = [];

    	var group = {};
    		group.title = "All";
    		group.members = $scope.members;

    	$scope.groups.push(group);

    	$scope.groupByProperty = function(){
    		var currentGroupingCriteria = $scope.filter.model;
    		
    		//create groups
    		$scope.groups = groupBy($scope.members, function(item) {
    		    return [ item[currentGroupingCriteria] ];
    		}, currentGroupingCriteria);
    	}

    	function arrayFromObject(obj) {
    	    var arr = [];
    	    for (var i in obj) {
    	        arr.push(obj[i]);
    	    }
    	    return arr;
    	}

    	function groupBy(list, fn, currentGroupingCriteria) {
    	    var groups = {};
    	    if(currentGroupingCriteria == "teams"){

    	    	for(var i=0; i<list.length; i++){
    	    		for(var j=0; j < list[i][currentGroupingCriteria].length; j++){

    	    			var group = JSON.stringify( fn(list[i])[0][j].name );

    	    			if (group in groups) {
    	    			    groups[group].members.push( list[i] );
    	    			} 

    	    			else{
    	    				groups[group] = {};
    	    				groups[group].title = list[i][currentGroupingCriteria][j].name;
    	    				groups[group].members = [ list[i] ];
    	    			}
    	    		}
    	    	}
    	    	
    	    }

    	    else if(currentGroupingCriteria == "all"){
    	    	$scope.groups = [];

    	    	var group = "all";
    	    		
    	    		groups[group] = {};
    	    	    groups[group].members = $scope.members;
    	    	    groups[group].title = "All";
    	    }

    	    else{
	    	    for (var i = 0; i < list.length; i++) {

	    	        var group = JSON.stringify(fn(list[i]));

	    	        if (group in groups) {
	    	            groups[group].members.push( list[i] );
	    	        } 

	    	        else {
	    	        	groups[group] = {};

	    	            groups[group].members = [ list[i] ];
	    	            groups[group].title = list[i][currentGroupingCriteria];
	    	        }
	    	    }
	    	}

    	    return arrayFromObject(groups);
    	}

    	
  	});

	app.config(function($mdThemingProvider) {
	  var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
	    'contrastDefaultColor': 'light',
	    'contrastDarkColors': ['50'],
	    '50': 'ffffff',
	    '100': '1a237e'
	  });

	  $mdThemingProvider.definePalette('customBlue', customBlueMap);
	  $mdThemingProvider.theme('default')
	    .primaryPalette('customBlue', {
	      'default': '50',
	      'hue-1': '100'
	    }).accentPalette('pink');
	  $mdThemingProvider.theme('input', 'default').primaryPalette('grey')
	});

})();
