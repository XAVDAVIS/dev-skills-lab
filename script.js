// $(function() {
//     $("input[type=checkbox]:checked").css('background-color', 'red')
// });





// const $skill = $('#text');

// $('submit').click(function(event))

// $('ul').append($('<li>'))





// console.log('Javascript is working!')




// $("body").css('color', 'green');


// $(this).css('color', 'red');

// $(this).css({ 'color': 'red', 'font-size': '150%' });



$(document).ready(function() {
    $('#newSkill').click(function() {
        var myList = $('#text').val();
        $('#list').append('<li>'+'<button id="remove">'+'X'+'</button>'+myList+'</li>'); return false;
    });
});
$(document).ready(function() {
    $('#newSkill').click(function() {
        $('#text').val('');
    })
});

$(document).on('click','li', function(){
    $(this).remove();    
  });