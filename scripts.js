(function setupMenu(){
    let menu = document.getElementById("nav-menu");
    let wrapper = document.getElementById("nav-menu-wrapper");
    let menuItems = document.getElementsByClassName("menu-button");

    //only make menu div tabable when hamburger menu is present
    window.addEventListener('resize', function(){
        if(window.innerWidth <= 600){
            menu.tabIndex = 0;
        }
        else{
            menu.removeAttribute("tabIndex");
        }
    });

    //shows and hides the menu
    menu.onclick = function(event){
        //toggle visible class
        wrapper.classList.contains("visible") ?
            wrapper.classList.remove("visible") :
            wrapper.classList.add("visible"); 
        event.stopPropagation();
        event.preventDefault();
    }

    //makes menu buttons functional by clicking enter when focused
    function onkeydown(event){
    if (event.key === 'Enter') {
            return onclick(event);
        }
    }

    //hides the menu when the focus changes to a non-menu item
    function onblur(event){
        const menuClasses = [
            "menu",
            "menu-button"
        ];

        function isMenuElement(element){
            return menuClasses.find( className => Array.from(element.classList).includes(className));
        }

        // IE handles differently - https://stackoverflow.com/a/49325196
        const target = event.relatedTarget || document.activeElement;

        if (!isMenuElement(target)) {
            wrapper.classList.remove("visible");
        }
    }

    //sets menu items onblur and onkeydown
    menu.onblur = onblur;
    menu.onkeydown = onkeydown;
    for(let i=0; i<menuItems.length; i++){
        menuItems[i].onblur = onblur;
        menuItems[i].onkeydown = onkeydown;
    }
})();