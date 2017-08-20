
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


// $(function() {
//     let availableTags = [
//         "Woman",
//         "Men",
//         "Kids",
//         "Comming Soon",
//         "About"
//     ];
//     $( "#tags" ).autocomplete({
//         source: availableTags
//     });
// });
//
//
//     $(document).ready(function(){
//         $('#submit').click(function(){
//             let term = "#";
//             let tags = "";
//             // $('body').removeHighlight();
//             if($('#tags').val() != "")
//             {
//                 term += $("#tags").val();
//                 tags = $('#tags').attr('value');
//             }
//             if($('#tags').val() == ""){
//             $("p.results").fadeIn().append("Enter search query in field above");
//             return false;
//         }
//             // $('a').highlight(tags);
//             // location.href = term.toLowerCase();
//         });
//     });




// $(function() {
//     var availableTags = [
//         "ActionScript",
//         "BASIC",
//         "C++",
//         "Delphi",
//         "Java",
//         "JavaScript",
//         "Pascal",
//         "PHP",
//         "Python",
//         "Ruby",
//         "Visual Fortran"
//     ];
//     $( "#tags" ).autocomplete({
//         source: availableTags
//     });
// });
//
//     $(document).ready(function(){
//         $('#submit').click(function(){
//             var term = "#";
//             var tags = "";
//             $('body').removeHighlight();
//             if($('#tags').val() != "")
//             {
//                 term += $("#tags").val();
//                 tags = $('#tags').attr('value');
//             }
//             if($('#tags').val() == ""){
//             $("p.results").fadeIn().append("Enter search query in field above");
//             return false;
//         }
//             $('h3').highlight(tags);
//             location.href = term.toLowerCase();
//         });
//     });

