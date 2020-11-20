function openMenu() {
    document.getElementById("mySidenav").style.width = "100%";
    // document.getElementById("mySidenav").style.visibility = "visible";
    document.getElementById("hidden-logo").style.visibility = "hidden";
  }
  
  function closeMenu() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("mySidenav").style.visibility = "hidden";
    document.getElementById("hidden-logo").style.visibility = "visible";
  }
  
  // var largura = document.body.style.width

  // if(largura >= 100){
  //   document.getElementById("mySidenav").style.width = "300px";
  // }