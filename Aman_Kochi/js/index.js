var i = 0;
var myVar;

function createSession(){
  if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      sessionStorage.setItem("firstload", "1");
  } else {
      // Sorry! No Web Storage support..
      console.log('No Storage support');
  }
}

function loadSplash(){
  if (typeof(Storage) !== "undefined") {
    if(sessionStorage.getItem("firstload") != "1"){
      makeProgress();
    }else{
      removeSplash();
    }
  }
}

function removeSplash(){
  $('#welcome').remove();
}

function makeProgress(){
    if(i < 100){
        i = i + 1;
        $(".progress-bar").css("width", i + "%").text(i + " %");
    }else{
      clearTimeout(myVar);
      removeSplash();
      createSession();
      return;
    }
    // Wait for sometime before running this script again
    myVar =   setTimeout("makeProgress()", 50);
}

loadSplash();