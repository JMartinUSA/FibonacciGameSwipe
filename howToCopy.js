var iHowTo = 0;
function addOneHowTo(){
    iHowTo = iHowTo + 1
    if(iHowTo == 12){
        iHowTo = 0
    }
}
function minusOneHowTo(){
    iHowTo = iHowTo - 1
    if(iHowTo == -1){
        iHowTo = 11
    }
}
function change_cssHowTo(){
    document.getElementById('container').style.backgroundImage = "url('"+iHowTo+".png')";
}