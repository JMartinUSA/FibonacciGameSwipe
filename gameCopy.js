var hours;
var minutes;

var correctThisSession=0;
var incorrectThisSession=0;
var inARow=0;
var recordInARowThisSession=0;

var alltimeRecordInARowFibonacci = localStorage.getItem('alltimeRecordInARowFibonacci');

function submitAnswer(){
	if(hours == selectedHours && minutes == selectedMinutes){
		correctFunction();
	}else{
		incorrectFunction();
	}
}
function nextLevel(){
	clearHours();
	clearMinutes();
	changeClock();
	hidePopout();
}
function correctFunction(){
	correctThisSession++;
	inARow++;
	if(inARow > recordInARowThisSession){
		recordInARowThisSession = inARow;
	}
	alltimeRecordInARowFibonacci = localStorage.getItem('alltimeRecordInARowFibonacci');
	if(recordInARowThisSession > alltimeRecordInARowFibonacci){
		localStorage.setItem('alltimeRecordInARowFibonacci', recordInARowThisSession);
	}
	popoutCorrect();
	plusOneLocalStorage('alltimeCorrect');
}
function incorrectFunction(){
	incorrectThisSession++;
	inARow=0;
	popoutIncorrect();
	plusOneLocalStorage('alltimeIncorrect');
}

function highlightHour(element, hoursIs){
	element.style.background='red';
	selectedHours = hoursIs;
	console.log(selectedHours);
}
function highlightMinute(element, minutesIs){
	element.style.background='blue';
	selectedMinutes = minutesIs;
	console.log(selectedMinutes);
}


function clearHours(){
	selectedHours = 0;
	for(i = 0; i < 12; i++){
		//console.log("right"+i);
		document.getElementById("rightButton"+i).style.background='rgba(255,90,90,.5)';
	}
}
function clearMinutes(){
	selectedMinutes = 0;
	for(i = 0; i < 12; i++){
		//console.log("bottom"+i);
		document.getElementById("bottomButton"+i).style.background='rgba(90,90,255,.5';
	}
}
