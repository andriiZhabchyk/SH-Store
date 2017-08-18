
function searchToggle(obj, evt){
    let container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active-search')){
        container.addClass('active-search');
        evt.preventDefault();
    }
    else if(container.hasClass('active-search') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active-search');
        // clear input
        container.find('.search-input').val('');
    }
}


