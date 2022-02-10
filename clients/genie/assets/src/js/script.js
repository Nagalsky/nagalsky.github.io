$(document).ready(function(){
    //Initial Bootstrap select
    $('.selectpicker').selectpicker();

    //Select all checkboxes in the table
    $(function(){
        //column checkbox select all or cancel
        $("input.select-all").click(function () {
            var checked = this.checked;
            $("input.select-item").each(function (index,item) {
                item.checked = checked;
            });
        });

        //check selected items
        $("input.select-item").click(function () {
            var checked = this.checked;
            checkSelected();
        });

        //check is all selected
        function checkSelected() {
            var all = $("input.select-all")[0];
            var total = $("input.select-item").length;
            var len = $("input.select-item:checked:checked").length;
            all.checked = len===total;
        }
    });

    //Collapse box action
    $(function(){
        $('.collapse-box__toggle').on('click', function(){
            $(this).toggleClass('collapse-box__toggle--is-opened')
            $(this).parent().next('.collapse-box__body').slideToggle(1)
        })
    });
})