var ieOk=false;
var flashOk=false;
var timeOk=false;
var bro = new Browser();
function next(nowId,nextId){
    clearRadio(nowId);
    if(nextId=="search"){
        window.location.href="http://yy6920.sf.net/search"
        return;
    }
    document.getElementById(nextId).style.display="block";
}
function clearRadio(rdoName){
    document.getElementById(rdoName).style.display="none";
    var rdos=document.getElementsByName(rdoName);
    for(var i=0;i<rdos.length;i++){
        rdos[i].checked=false;
    }
}

if(window.location.href.indexOf("52yy6920")==-1){
    window.location.href="yy://join:room_id=6920/";
}

function Browser() {
    var ua, s, i;
    this.isIE = false;//Internet Explorer
    this.isNS = false;//Netscape
    this.version = null;
    ua = navigator.userAgent;
    s = "MSIE";
    if ((i = ua.indexOf(s)) >= 0) {
        this.isIE = true;
        this.version = parseFloat(ua.substr(i + s.length));
        return;
    }
    s = "Netscape6/";
    if ((i = ua.indexOf(s)) >= 0) {
        this.isNS = true;
        this.version = parseFloat(ua.substr(i + s.length));
        return;
    }
    // Treat any other "Gecko" browser as NS 6.1.
    s = "Gecko";
    if ((i = ua.indexOf(s)) >= 0) {
        this.isNS = true;
        this.version = 6.1;
        return;
    }
}

function checkDate(){
    var now=new Date();
    if(now.getFullYear()<2011||(now.getFullYear()==2011&&now.getMonth()<11)){
        return false;
    }
    return true;
}