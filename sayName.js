//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
 var Person = function(name, age){
	this.name = name;
	this.age = age;
	this.sayName = function(){
		console.log(this.name);
	};
};

var ben = new Person(‘Ben’);
ben.sayName(name);
var tyler = new Person(‘Tyler’);
tyler.sayName(age);



//Now create three instances of Person with data you make up

  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
