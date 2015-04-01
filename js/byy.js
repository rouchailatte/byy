

var byy = angular.module('byy', ['ngRoute']);

byy.config(function($routeProvider){
  $routeProvider.
    when('/',{templateUrl:'partials/skill.html', controller:'eduCtrl'}).
    when('/edu',{templateUrl:'/partials/edu.html'}).
    when('/exp', {templateUrl: '/partials/exp.html'}).
    when('/proj', {templateUrl: '/partials/proj.html'}).
    when('/skill', {templateUrl: '/partials/skill.html'}).
    when('/design', {templateUrl: '/partials/design.html'}).
    otherwise({redirectTo:'/'})
});



// animation n stuff
$(document).ready(function(){

  // hide courses

  $(".creditInfo").hide();
  $(".header").hide();
  $(".mainNav").hide();
  $(".galleria").animate({
    opacity: 0
  }, 1);
  $(".mainContent").hide();
  $(".footer").hide();
  $(".creditInfo").fadeIn(200, function(){
    $(".header").fadeIn(150, function(){
      $(".mainNav").fadeIn(200, function(){
        // $(".galleria").fadeIn(150, function(){
          $(".mainContent").fadeIn(150, function(){
            $(".footer").fadeIn(150);
            $(".galleria").animate({
              opacity: 1
            }, 400);
          });
        // });
      });
    });
  });
});

// courses animation


// run galleria
// Galleria.loadTheme('galleria.classic.min.js');
Galleria.run('.galleria');




// edu ctrl
byy.controller('eduCtrl', function($scope){
  var uclaToggle = false;
  var risdToggle = false;

  $(".eduListContentCourse").hide();
  $(".uclaCourseButton").click(function(){
    if(!uclaToggle){
      $("#uclaCourse").fadeIn(300, function(){
        uclaToggle = true;
      });
    }
    else
    {
      $("#uclaCourse").fadeOut(300, function(){
        uclaToggle = false;
      });
    }
  });

  $(".risdCourseButton").click(function(){
    if(!risdToggle){
      $("#risdCourse").fadeIn(300, function(){
        risdToggle = true;
      })
    }
    else{
      $("#risdCourse").fadeOut(300, function(){
        risdToggle = false;
      });
    }
  })
})