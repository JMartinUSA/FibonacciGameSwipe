var percentCorrect;

function popoutCorrect(){
	correctIsShowing = true;
	recalculateStats();
	document.getElementById("correctPopout").style.display="block";
	document.getElementById("transparentCover").style.display="block";

	document.getElementById("inARow").innerHTML=inARow;
	document.getElementsByClassName("percentCorrectThisSession")[0].innerHTML=percentCorrectThisSession;
}
function popoutIncorrect(){
	incorrectIsShowing = true;
	recalculateStats();
	document.getElementById("incorrectPopout").style.display="block";
	document.getElementById("transparentCover").style.display="block";

	document.getElementsByClassName("recordInARowThisSession")[0].innerHTML=recordInARowThisSession;
	document.getElementsByClassName("percentCorrectThisSession")[1].innerHTML=percentCorrectThisSession;
}
function hidePopout(){
	correctIsShowing = false;
	incorrectIsShowing = false;
	document.getElementById("correctPopout").style.display="none";
	document.getElementById("incorrectPopout").style.display="none";
	document.getElementById("transparentCover").style.display="none";
}


function getKeysGame(){
	for(var i = 0, len = localStorage.length; i < len; ++i){
		console.log(localStorage.getItem(localStorage.key(i)));
	}
}