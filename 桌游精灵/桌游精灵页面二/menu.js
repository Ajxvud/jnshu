
/* function showDiv(){
    var menu = document.getElementById("menu");
    menu.style.display="block";
}
 */

function doHide(){
    var oDiv = document.getElementById("menu");
    var oButton = document.getElementById("btnTest")
    if (oDiv.style.display == "none"){
      oDiv.style.display = "block";
    }else {
      oDiv.style.display = "none";
    }
  }