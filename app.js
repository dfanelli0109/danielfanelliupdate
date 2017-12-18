console.log("app.js");
var app = angular.module("MyApp2", []);

class Main{
  constructor($http){
     this.message = "Ok so you ready for some fun...";
     this.message2="I told those monkey to stop jumping on the bed.";
     this.http = $http;
     this.posts;
     this.http.get("https://jsonplaceholder.typicode.com/posts/")
     .then((res)=>{this.posts = res.data})
}
}
Main.$inject = ["$http"];
app.controller("Main", Main);
