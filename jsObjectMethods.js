

document.write("<span class='span1'>Greatness from small beginning</span>")


var kanwal= new Object();

kanwal.name="prada";
kanwal.brand="italian";

document.write("<br><br>"+kanwal.name);
document.write("<br><br>" +kanwal.brand);



function function1(city,country,continent){

this.city=city;
this.country=country;
this.continent=continent;

}
//another method of creating an object
var k=new function1("Madrid","Spain","Europe");

document.write("<br><span class='span1'>Im living in "+k.city+" and my country is "+k.country+" and it is in "+k.continent+"</span>");

//Creating object by Create method
/*
var bermunda={


city:"Paris",

area:"Europe",

currency:"Euro",

};

bermunda.hell= function(){ 
//creating function with name of hell

return  this.city+" which is in "+ this.area+" where currency is  "+ this.currency;

};

var venice=Object.create(bermunda);
var k=venice.area
document.write("<br> " +k);
var f= venice.hell();
document.write("<br>" +f);
document.getElementById("para2").innerHTML="Im living in "+bermunda.hell();
*/

const babbu={

Name:"Eljah Mikealson",

Motto:"Family above all",

end:"Hello love",

OtherName:"ManofHonour",

};

babbu.fun=function(){

return "Im Elijah, "+this.Name+". My motto of life is "+this.Motto+",my other name is "+this.OtherName;


};

var first=Object.create(babbu);

var k =first.end;
document.write("<br><span class='span1'>"+k+"</span>");

var w=first.fun();
document.write("<br><span class='span1'>"+w+"</span>");

var third=Object.create(babbu);
document.write(third.OtherName);
var second =Object.assign({},babbu);

var n=second.end;
document.write("<br>" +n);

function volume(breath,height){

	this.breath=breath;
	this.height=height;
	this.AddProperty=AddProperty;//function is assigned as a object or property
	this.vol=vol;//same in this case

}

function AddProperty(property){

with (this){
length=property;
}
}
function vol(l,b,h){
with (this){
 
 v=l*b*h;
 
}

}

var obj10= new volume(10,10);

obj10.AddProperty(10);
obj10.vol(10,10,10);
document.write("<br><br>The breath is:"+obj10.breath);
document.write("<br><br>The height is:"+obj10.height);
document.write("<br><br>The length is:"+length+"<br>");


document.write("<br><span class='span1'>The volume is:"+v+"</span>");


//using defineProperty menthod and creating property by this
var berlin={};

Object.defineProperty(berlin,'university',{

value:'BIT',
writable:true


});

var dis=Object.getOwnPropertyDescriptor(berlin,'university');
document.write(dis.value);
document.write(dis.writable);

var uni=berlin.university;

document.write("<br>")
document.write(uni);

document.write("<br>");

berlin.university="MIT";

document.write(berlin.university);
//document.write(america);

var clg="langara";

Object.defineProperty(berlin,'college',{


get:function(newvalue) {

return clg;

},
set:function(newvalue){

clg=newvalue;

},
enumerable:true,
configurable:true,
//writable:true
});

var g=berlin.college;

document.write("<br>"+g);

berlin.college="university of Paris";

var i=berlin.college;

document.write("<br>"+i);
//document.write(clg)


//The Object.defineProperties() method defines new or modifies existing properties directly on an object, and returning the object.


document.write("<br><br>");
var grey={};
Object.defineProperties(grey,{

	len:{


		value:10
	},

	bre: {

		value:15
	}

});

document.write("length of the rectangle:"+grey.len);

document.write("<br>Breath of the rectangle:"+grey.bre);
//hasOwnProperty is a function which retuns true if object has the property or false if not.
document.write("<br>"+grey.hasOwnProperty('len')+"<br>");
document.write(grey.hasOwnProperty.call(grey,'len'));

//JavaScript Object.entries() method is used to return an array of a given object's own enumerable property [key, value] pairs. The ordering of the properties is the same as that given by looping over the property values of the object manually.

const arr={"italy":"europe","india":"asia","USA":"North America"};
document.write("<br>"+Object.entries(arr)[0]);

//The Object.freeze() method freezes an object that prevents new properties from being added to it. This method prevents the modification of existing property, attributes, and values.
const obj20={
	property1:22
};
Object.freeze(obj20);
obj20.property1=11;
obj20.newp=21;
document.write(obj20.newp)
document.write("<br>"+obj20.property1);

//The Object.getOwnPropertyDescriptor method allows to query the full information about a property and returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.

/*var obj21={

	Property2:20,
	
};*/
/*var berlin={};

Object.defineProperty(berlin,'university',{

value:'BIT',
writable:true


});

var dis=Object.getOwnPropertyDescriptor(berlin,'university');
document.write(dis.value);
document.write(dis.writable)
*/
var obj21={};
Object.defineProperty(obj21,'property2',{

	value:20
/*	writable:false,
	configurable:true*/
});
var disc=Object.getOwnPropertyDescriptor(obj21,'property2');
document.write("<br>"+disc.value);
document.write("<br>"+disc.writable);

//The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object. The difference between getOwnPropertyDescriptors() and getOwnPropertyDescriptor() method is that getOwnPropertyDescriptors() method ignores symbolic properties.
const obj22={};

Object.defineProperties(obj22,{

	dimension1:{

		value:20
	},

	dimension2:{

		value:12
	}

});

const variable1=Object.getOwnPropertyDescriptor(obj22,'dimension2');
document.write("<br>");

document.write(variable1.value);
//document.write(variable1.value);

//The Object.getOwnPropertyNames() method returns an array of all properties (except those non-enumerable properties which use symbol) found directly upon a given object. 
const bulidingHouse={

	concrete:10,

	cement:20,

	sand:1
};

document.write("<br>")
var mahal=Object.getOwnPropertyNames(bulidingHouse)
document.write(mahal);

document.write("<br>");
Object.getOwnPropertyNames(bulidingHouse).forEach(function(val,index,array){

document.write(val+":"+bulidingHouse[val])

});
//The forEach() method calls a function once for each element in an array, in order.

//The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object. This method returns an empty array unless you have set symbol properties on your object.

//The Object.seal() method of JavaScript seals an object which prevents new properties from being added to it and marks all existing properties as non-configurable. The object to be sealed is passed as an argument, and the method returns the object which has been sealed.

var obj24={

	a:1,
	b:2,
	c:3
}
Object.seal(obj24);
//prevents other code from deleting propertied of an object.

obj24.b=30;
document.write("<br>"+obj24.b);
delete obj24.b;
document.write("<br>"+obj24.b);

//the diffrence between the freeze and sear method is seal just prevents to delete the property however freeze prevents not only delete the property but also doesnt let you to modify it.



var obj25={

	p:1,
	q:2
}
var obj26={

	e:10,
	f:4
}
Object.setPrototypeOf(obj26,obj25);
document.write("<br>"+obj26.p);
document.write("<br>"+obj26.q);

//The Object.values() returns an array which contains the given object's own enumerable property values, in the same order as that provided by a for...in loop.

var obj27={

	a:2,
	b:55
}

document.write(Object.values(obj27)
