




$('button').click(function(){
    $.getJSON('./EoMword.json', function(data){
        var random =  Math.floor(Math.random() * 44999)
        var answer = data.data[random].title
        $('h1').text(answer)
    });
    
});