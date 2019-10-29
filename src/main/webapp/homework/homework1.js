function User(name, surName)
{
	this.name = name;
	this.surName = surName;
}

User.prototype= 
{
	getSurName: function()
	{
		return this.surName;
	},
}

var user2 = 
{
	name:"Vasia",

	getName:function()
	{
		return this.name;
	},
	setName: function(name)
	{
		this.name = name;
	},

	setAllData: function(name,surName)
	{
		this.name = name;
		this.surName = surName;
	}
}


var bind = function(fn, context) {
  
  return function() {
    return fn.apply(context, arguments);
  };
};


var user = new User("Leha","Petrov");
var userBind = bind(user2.setName,user);
var userBind2 = bind(user2.getName,user);
var userBind3 = bind(user2.setAllData,user);
userBind("Bogdan");
userBind3("Anton","Marchenko");
console.log(userBind2() + " " + user.getSurName());


