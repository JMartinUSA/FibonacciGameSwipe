var correctIsShowing = false;
var incorrectIsShowing = false;
var statsIsShowing = false;
var leftMenuIsShowing = false;
var rightMenuIsShowing = false;


var indexIsActive = false;
var clockIsActive = false;
var gameIsActive = false;
var howToIsActive = false;
var aboutIsActive = false;


hideAllButThis('Index');



function hideAllButThis(IDName){
	var containerNameLength = document.getElementsByClassName("container").length;
	var value = 0;
	while(value < containerNameLength){
		document.getElementsByClassName("container")[value].style.display="none";
		value++;
	}
	console.log(IDName);
	var containerName = 'container'+IDName;
	console.log(containerName);
	document.getElementById(containerName).style.display="block";
	console.log(IDName);
	indexIsActive = false;
	clockIsActive = false;
	gameIsActive = false;
	howToIsActive = false;
	aboutIsActive = false;

	if(IDName == "Index"){
		indexIsActive = true;
	}else if(IDName == "Clock"){
		clockIsActive = true;
	}else if(IDName == "Game"){
		gameIsActive = true;
	}else if(IDName == "HowTo"){
		howToIsActive = true;
	}else if(IDName == "About"){
		aboutIsActive = true;
	}
	
}
function showRightMenu(){
	rightMenuIsShowing = true;
	showStats();
	//document.getElementById('swipeFromRight').style.display = 'block';
	//document.getElementById('transparentCover').style.display = 'block';
}
function showLeftMenu(){
	leftMenuIsShowing = true;
	document.getElementById('swipeFromLeftContainer').style.display = 'block';
	document.getElementById('swipeFromLeft').style.display = 'block';
	document.getElementById('transparentCover').style.display = 'block';
}
function hideSwipeMenus(){
	leftMenuIsShowing = false;
	document.getElementById('swipeFromLeftContainer').style.display = 'none';
	document.getElementById('swipeFromLeft').style.display = 'none';
	rightMenuIsShowing = false;
	document.getElementById('swipeFromRight').style.display = 'none';
	document.getElementById('exitStats').style.display = 'none';
	if(!correctIsShowing && !incorrectIsShowing){
		document.getElementById('transparentCover').style.display = 'none';
	}
}
function swipeHome(){
	console.log('home');
	hideSwipeMenus();
	hideAllButThis('Index');
}
function swipeSettings(){
	console.log('settings');
	hideSwipeMenus();
}
function swipeStats(){
	console.log('stats');
	hideSwipeMenus();
	showRightMenu();
}

function showActive(){
	console.log("correctIsShowing: "+correctIsShowing);
	console.log("incorrectIsShowing: "+incorrectIsShowing);
	console.log("statsIsShowing: "+statsIsShowing);
	console.log("leftMenuIsShowing: "+leftMenuIsShowing);
	console.log("rightMenuIsShowing: "+rightMenuIsShowing);

	console.log("indexIsActive: "+indexIsActive);
	console.log("clockIsActive: "+clockIsActive);
	console.log("gameIsActive: "+gameIsActive);
	console.log("howToIsActive: "+howToIsActive);
	console.log("aboutIsActive: "+aboutIsActive);
}
