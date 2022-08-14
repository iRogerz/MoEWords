




$('button').click(function(){
    $.getJSON('./thing.json', function(data){
        var random =  Math.floor(Math.random() * 44999)
        var answer = data.data[random].title
        // console.log(data.data[1][1])
        $('h1').text(answer)
    });
    
});