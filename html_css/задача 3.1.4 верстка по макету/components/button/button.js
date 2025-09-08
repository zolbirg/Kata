
document.getElementById('#burger').addEventListener('click', sideMenu);
document.getElementById('#exit').addEventListener('click', sideMenu);



function sideMenu() {
    if (document.getElementById('#side-menu').className === "side-menu side-menu--close"){

        document.getElementById('#side-menu').className = "side-menu side-menu--open"
    }
    else
        {
          document.getElementById('#side-menu').className = "side-menu side-menu--close"
    }

   
}