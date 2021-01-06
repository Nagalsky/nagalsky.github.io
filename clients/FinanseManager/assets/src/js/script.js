$(document).ready(function(){
    //Navbar menu action
    $(function(){
        $('.navbar-menu__toggle').on('click', function(){
            $('body').toggleClass('navbar-menu-is-closed')
        })
    });
})