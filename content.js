/************************************************************************
 * Author: Lourens Willekes
 * December 2016
 ************************************************************************/

var elements = document.getElementsByTagName('a');
	// <a href="/PROD/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu"  class="submenulinktext2" id="ssbbackurl">RETURN TO MENU</a>/ 
	// <a href="http://www.travel-explorer.com/australia-best-beaches/" target="_blank"><img src="/pix/byron_bay_225x169.jpg" style="border:1px solid black;max-width:100%;" alt="Photo of Byron Bay, one of Australia's best beaches!"></a>
// var elements = document.getElementsByTagName('input');
	// <input type="text" name="KEYWRD_IN" size="20" maxlength="65" ID="keyword_in_id" />
	// <input type="submit" name="ADD_BTN" value="Register" />


for (var j = 0; j < elements.length; j++) {
	/*var attr = elements[j].attributes;
	for (var i = 0; i < attr.length; i++) {
		var out = attr[i].name + " : " + attr[i].value;
		console.log(out);
	}*/
	
	var out = "Link " + j + ": " + elements[j].getAttribute('href');
	console.log(out);
	
	
}

// window.location.href = '';