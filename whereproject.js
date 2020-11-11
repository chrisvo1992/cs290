
var whereList =[
    {
        name:"United States of America",
        clue:"I am the Land of the free home of the brave",
        hint1:"I was founded in 1776",
        hint2:"I am comprised of 328 million people"
    },
    {
        name:"Hawaii",
        clue:"I am the most famous tourist place for American's on the West Coast",
        hint1:"I have many islands but my most famous is Honolulu",
        hint2:"You will eat/drink lots of coconut when you visit here"
    },
    {
        name:"New York",
        clue:"I am the most famous for being the place to see the Statue of Liberty",
        hint1:"I have many pizza restaraunts",
        hint2:"Everyone visits the Empire State Building here"
    },
    {
        name:"Las Vegas",
        clue:"I am the most famous for being Sin City",
        hint1:"I am a city that never sleeps",
        hint2:"Everyone comes here for endless buffets"
    },
    {
        name:"California",
        clue:"I am the most famous for having the most high tech companies",
        hint1:"I am the state with silicon valley",
        hint2:"I am the state with one of the most highest taxes"
    },
    {
        name:"San Francisco",
        clue:"I am a city for for having the Golden Gate Bridge",
        hint1:"I am very expensive to live at",
        hint2:"I am known for the football team 49ers"
    },
    {
        name:"Texas",
        clue:"I am a the biggest state in North America",
        hint1:"When tourists visit here they love to wear cowboy attire",
        hint2:"I am known for hearding cattle"
    },
    {
        name:"San Francisco",
        clue:"I am a city for for having the Golden Gate Bridge",
        hint1:"I am very expensive to live at",
        hint2:"I am known for the football team 49ers"
    },
    {
        name:"Florida",
        clue:"I am a state that people love to retire at on the East Coast",
        hint1:"A rapper stole my name",
        hint2:"I am home of the Kennedy Space Center"
    },
    {
        name:"Paris",
        clue:"I am a city most famous for have the Effiel Tower ",
        hint1:"Tourists love to eat baguettes here",
        hint2:"City of love (in France)"
    },
    
]

var indexList = [0,1,2,3,4,5,6,7,8,9]; 
var index = 0;
var X_number = 1;

document.getElementById('clue').textContent = whereList[index].clue;

function setClue(index){
    document.getElementById('clue').textContent = whereList[index].clue;
}

document.getElementById('hint1button').addEventListener("click", function(){
    document.getElementById('hint1').textContent = whereList[index].hint1;
});

document.getElementById('hint2button').addEventListener("click", function (){
    document.getElementById('hint2').textContent = whereList[index].hint2;
});

document.getElementById('submit').addEventListener("click", function(){
    let X = "X"
    X += X_number
    var img = document.createElement("IMG");
    img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/100px-Red_X.svg.png');
    img.setAttribute('width', '65');
    img.setAttribute('height','65');
    var input = document.getElementById('guess').value;
    input = input.toLowerCase();
    if (input != whereList[index].name.toLowerCase()){
        document.getElementById(X).appendChild(img)
        X_number += 1
        if(X_number == 6){
            document.getElementById('results').textContent = "Sorry you ran out of attempts, the answer is: "+ whereList[index].name
        }
    }
    else{
        document.getElementById('results').textContent = 'You guess correctly! it is: '+ whereList[index].name
    }
})

document.getElementById('new-game').addEventListener("click", function(){
    document.getElementById('guess').value="";
    document.getElementById('X1').innerHTML= "";
    document.getElementById('X2').innerHTML= "";
    document.getElementById('X3').innerHTML= "";
    document.getElementById('X4').innerHTML= "";
    document.getElementById('X5').innerHTML= "";
    document.getElementById('hint1').textContent = " ";
    document.getElementById('hint2').textContent= " ";
    document.getElementById('results').textContent = " ";
    X_number = 1;
    index ++;
    if(index == 10){
        index = 0;
    }
    setClue(index);
});




