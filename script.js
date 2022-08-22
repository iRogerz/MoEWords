

var random;

$('.word').click(function(){
    $('h2').text('')
    $.getJSON('./thing.json', function(data){
        getRandom()
        var answer = data.data[random].title
        $('h1').text(answer)
    });
    
});

$('.hint').click(function(){
    $.getJSON('./thing.json', function(data){
        var hint = data.data[random].note
        $('h2').text(hint)
    })
});

function getRandom(){
    random =  Math.floor(Math.random() * 44999)
}