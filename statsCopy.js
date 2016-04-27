var alltimeCorrect;
var alltimeIncorrect;
var alltimeAccuracy;
var alltimeRecordInARowFibonacci;

function plusOneLocalStorage(Key){
	var value = localStorage.getItem(Key);
	value++;
	localStorage.setItem(Key, value);
	console.log(value);
}

function recalculateStats(){
	alltimeCorrect = Number(localStorage.getItem('alltimeCorrect'));
	alltimeIncorrect = Number(localStorage.getItem('alltimeIncorrect'));
	alltimeRecordInARowFibonacci = localStorage.getItem('alltimeRecordInARowFibonacci');
	alltimeAccuracy = (((alltimeCorrect/(alltimeCorrect+alltimeIncorrect))*100)).toFixed(0)+"%";
	percentCorrectThisSession = ((correctThisSession/(correctThisSession+incorrectThisSession))*100).toFixed(0)+"%";
}


function showStats(){
	statsIsShowing = true;
	document.getElementById('swipeFromRight').style.display="block";
	document.getElementById('exitStats').style.display="block";
	statsToHTML();
}
function backStats(){
	statsIsShowing = false;
	document.getElementById('swipeFromRight').style.display="none";
	if(correctIsShowing == false && incorrectIsShowing == false){
		document.getElementById('transparentCover').style.display="none";
	}
}
function statsToHTML(){
	recalculateStats();
	document.getElementById('alltimeCorrect').innerHTML=alltimeCorrect;
	document.getElementById('alltimeIncorrect').innerHTML=alltimeIncorrect;
	document.getElementById('alltimeAccuracy').innerHTML=alltimeAccuracy;
	document.getElementById('alltimeRecordInARowFibonacci').innerHTML = alltimeRecordInARowFibonacci || 0;
	document.getElementById('correctThisSession').innerHTML=correctThisSession || 0;
	document.getElementById('incorrectThisSession').innerHTML=incorrectThisSession || 0;
	document.getElementsByClassName('percentCorrectThisSession')[2].innerHTML=percentCorrectThisSession || 0;
	document.getElementsByClassName('percentCorrectThisSession')[1].innerHTML=percentCorrectThisSession || 0;
	console.log(recordInARowThisSession);
	document.getElementsByClassName('recordInARowThisSession')[1].innerHTML=recordInARowThisSession || 0;
}
