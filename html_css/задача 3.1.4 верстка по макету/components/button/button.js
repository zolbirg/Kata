
document.getElementById('#btn--burger').addEventListener('click', sideMenu);
document.getElementById('#exit--side-menu').addEventListener('click', sideMenu);

document.getElementById('#btn--repair').addEventListener('click', modalFeedback);
document.getElementById('#exit--modalFeedback').addEventListener('click', modalFeedback);







function sideMenu() {
    if (document.getElementById('#side-menu').className === "side-menu side-menu--close"){

        document.getElementById('#side-menu').className = "side-menu side-menu--open"
    }
    else
        {
          document.getElementById('#side-menu').className = "side-menu side-menu--close"
    }

   
}
// function modalFeedback() {
//     if (document.getElementById('#side-menu').className === "side-menu side-menu--close"){

//         document.getElementById('#side-menu').className = "side-menu side-menu--open"
//     }
//     else
//         {
//           document.getElementById('#side-menu').className = "side-menu side-menu--close"
//     }

   
// }