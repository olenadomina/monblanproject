$(function(){
    $(".datepicker").datepicker({
        dateFormat: 'dd.mm.yy', 
        showButtonPanel: true,         
    });
  
    $('.datepicker__clean').on('click', function(){
        console.log(this);
        let input = $(this).closest('.datepicker__item-wrapper').find('input');
        if (input.val() != ''){
            input.val('');
        }

    });
});