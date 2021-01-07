$(document).ready(function(){
    //Navbar menu action
    $(function(){
        $('.navbar-menu__toggle').on('click', function(){
            $('body').toggleClass('navbar-menu-is-closed')
        })
    });

    //Avoid dropdown menu close on click inside
    $(function(){
        $(document).on('click', '.dropdown-menu-filter', function (e) {
            e.stopPropagation();
        });
    });
})