var xhr = new XMLHttpRequest();
var r;
window.onload=loaddata;
function loaddata() {

	document.getElementById("idnumber").addEventListener("keyup", function (){ searchIDNumber(this.value);},false);
	document.getElementById("lastname").addEventListener("keyup", function (){ searchLastName(this.value);},false);
	document.getElementById("phone").addEventListener("keyup", function (){ searchPhoneNumber(this.value);},false);
	
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     r = JSON.parse(xhr.responseText);

    }
  };
  xhr.open("GET", "ClientData.json", true);
  xhr.send();

}

function searchLastName(lastName) {
	
	document.getElementById("searchItem").innerHTML="Search by Last Name"+"<br>";
	var output="<tr class=heading><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";
	var searchname;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchname=obj.lastName;
		if(searchname.startsWith(lastName))
		{	
				
            output+="<tr><td>";
			output+=obj.id;
			output+="</td><td>";
			output+=obj.firstName;
			output+="</td><td>";
			output+=obj.lastName;
			output+="</td><td>";
			output+=obj.address;
			output+="</td><td>";
			output+=obj.postalCode;
			output+="</td><td>";
			output+=obj.phone;
			output+="</td><td>";
            output+=obj.type;
			output+="</td></tr>";
		}
				
	}
document.getElementById("searchresults").innerHTML=output;


}
function searchIDNumber(id) {

	document.getElementById("searchItem").innerHTML="Search by ID Number"+"<br>";
	var output="<tr class=heading><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";
	var searchid;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchid=obj.id.toString();
		if(searchid.startsWith(id))
		{

			output+="<tr><td>";
			output+=obj.id;
			output+="</td><td>";
			output+=obj.firstName;
			output+="</td><td>";
			output+=obj.lastName;
			output+="</td><td>";
			output+=obj.address;
			output+="</td><td>";
			output+=obj.postalCode;
			output+="</td><td>";
			output+=obj.phone;
			output+="</td><td>";
            output+=obj.type;
			output+="</td></tr>";
		}

	}
	document.getElementById("searchresults").innerHTML=output;


}

function searchPhoneNumber(phone) {

	document.getElementById("searchItem").innerHTML="Search by Phone Number"+"<br>";
	var output="<tr class=heading><th>ID Number</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";
	var searchphone;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchphone=obj.phone;
		if(searchphone.startsWith(phone))
		{

            output+="<tr><td>";
			output+=obj.id;
			output+="</td><td>";
			output+=obj.firstName;
			output+="</td><td>";
			output+=obj.lastName;
			output+="</td><td>";
			output+=obj.address;
			output+="</td><td>";
			output+=obj.postalCode;
			output+="</td><td>";
			output+=obj.phone;
			output+="</td><td>";
            output+=obj.type;
			output+="</td></tr>";
		}

	}
	document.getElementById("searchresults").innerHTML=output;


}