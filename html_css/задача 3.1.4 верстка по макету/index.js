const sideMenu = document.querySelector('.side-menu')
const modal = document.querySelector('.modal');



function sideMenuIsActive(value) {
    value
    ? sideMenu.className = "side-menu open"
    : sideMenu.className = "side-menu close";
}


function modalIsActive(value){

    if (value ==="rep"){
      
        modal.className = "modal open"
        document.querySelector('.title__text--modal').innerHTML= 'Обратная связь'
        document.querySelector('.modal__content').innerHTML= `  
            <div class="modal__feedback">
                <input class="input input--custom" type="text" placeholder="Имя">
                <input class="input input--custom" type="text" placeholder="Телефон">
                <input class="input input--custom" type="text" placeholder="Электронная почта">
                <textarea  class="input input--custom" type="text" placeholder="Сообщение" cols="10" rows="10" maxlength="500" required ></textarea>
            </div>
        `
    }
    else if (value ==="call" ){
       modal.className = "modal open"
       document.querySelector('.title__text--modal').innerHTML= 'Заказать звонок'
       document.querySelector('.modal__content').innerHTML= ` 
            <div class="modal__call">
                    <input class="input input--custom" type="text" placeholder="Телефон">
            </div>
       `

    }
    else
        {
          modal.className = "modal close"
    }

   
}