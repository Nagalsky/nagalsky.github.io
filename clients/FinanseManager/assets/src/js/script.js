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

    //Slideout panel action
    $(function(){
        var $slidePanelToggle = $('[data-toggle="slide-panel"]');
        var $slidePanel = $('.slide-panel');
        var $slidePanelClose = $('.slide-panel__close')
        $slidePanelToggle.on('click', function (e) {
            e.preventDefault()
            $slidePanel.toggleClass('is-opened')
            $('body').toggleClass('modal-open')
        })

        $slidePanelClose.on('click', function (e) {
            e.preventDefault()
            $slidePanel.removeClass('is-opened')
            $('body').removeClass('modal-open')
        })
    });
    
    //Slide panel decline box action
    $(function(){
        var $slidePanelDeclineBoxToggle = $('[data-toggle="slide-panel-decline-box"]');
        var $slidePanelDeclineBox = $('.slide-panel-decline-box');
        var $slidePanelDeclineBoxInner = $('.slide-panel-decline-box__inner');
        var $slidePanelDeclineBoxClose = $('.slide-panel-decline-box__close');
        $slidePanelDeclineBoxToggle.on('click', function (e) {
            e.preventDefault()
            $slidePanelDeclineBox.toggleClass('is-opened')
        })

        $slidePanelDeclineBoxClose.on('click', function (e) {
            e.preventDefault()
            $slidePanelDeclineBox.removeClass('is-opened')
        })

        $(document).on('click touchstart', function (e) {
            if (
            $(e.target).closest($slidePanelDeclineBoxInner).length == 0 &&
            $(e.target).closest($slidePanelDeclineBoxToggle).length == 0
            ) {
            $slidePanelDeclineBox.removeClass('is-opened')
            }
        })
    });

    //Datepicker initial
    $(function(){
        $('.input-datepicker').datepicker();
    });
})