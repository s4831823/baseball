
var fontcolor ;
	function showtext(e) {
		var text = e.target;
		document.getElementById("battext").innerHTML = text.value;
		if (fontcolor == "White-barrel" ) {
			document.getElementById("battext").style.color="#000";
		}
		else if(fontcolor ==  "Natural-barrel") {
			document.getElementById("battext").style.color="#000";
		}
		else if(fontcolor == "Unfinished-barrel") {
			document.getElementById("battext").style.color="#000";
		}
		else{
			document.getElementById("battext").style.color="#fff";
		}

	}
	function showhandle(e) {
		var handlecolor = e.target;
		console.log(handlecolor.value+ ".png")
		document.getElementById("handle").src = "pic/" + handlecolor.value+ ".png" ;

	}
		function showbarrel(e) {
		var barrelcolor = e.target;
		console.log(barrelcolor.value+ ".png")
		document.getElementById("barrel").src = "pic/" + barrelcolor.value+ ".png" ;
			fontcolor =  barrelcolor.value;
	}			
	function init() {
		var handlepic = document.querySelectorAll("#handlecolor input");
		for (var i = 0; i < handlepic.length; i++) {
			handlepic[i].addEventListener("click",showhandle,false)
		}
			var barrelpic = document.querySelectorAll("#barrelcolor input");
		for (var i = 0; i < barrelpic.length; i++) {
			barrelpic[i].addEventListener("click",showbarrel,false)
		}
			var textcolor = document.getElementById("text");
			textcolor.addEventListener("keyup",showtext,false);
		}
	window.addEventListener("load", init, false);
