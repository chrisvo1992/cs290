var whatList = [
    {
        name:"Water",
        clue:"Always in you, Sometimes on you, If I surround you, I can kill you. What am I?",
        hint1:"This composes of more han half your body density",
        hint2:"Every living creature needs be in order to live"
    },
    {
        name:"Mirror",
        clue:"Look in my face, I am somebody; Look in my back, I am nobody. What am I?",
        hint1:"Is on sale at every hardware store",
        hint2:"You use this to tell what you look like"
    },
    {
        name:"Fire",
        clue:"I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
        hint1:"I hurt if you touch me",
        hint2:"Your male ancestors discovered me in a cave"
    },
    {
        name:"Onion",
        clue:"You use a knife to slice my head and weep beside me when I am dead. What am I?",
        hint1:"I am the least favorite dish topping",
        hint2:"I can be minced or diced"
    },
    {
        name:"Time",
        clue:"Until I am measured I am not known, Yet how you miss me when I have flown. What am I?",
        hint1:"I am digital or analog",
        hint2:"I will never stop running even after your death"
    },
    {
        name:"Heart",
        clue:"You can touch me,You can break me,You should win me if you want to be mine.. What am I?",
        hint1:"Every love song is about me",
        hint2:"I can be broken then amended once more"
    },
    {
        name:"Blackboard",
        clue:"I am white when I am dirty, and black when I am clean. What am I?",
        hint1:"If you're old enough your teachers used me in school",
        hint2:"I have been replaced by an albino version of myself"
    },
    {
        name:"Tree",
        clue:"I reach for the sky, but clutch to the ground; sometimes I leave, but I am always around. What am I?",
        hint1:"I am your lungs savior",
        hint2:"I am a well hated topic in computer science data structures binary search ___"
    },
    {
        name:"Ice",
        clue:"I am strong enough to smash ships, but I fear the Sun. What am I?",
        hint1:"I killed the Titanic",
        hint2:"A famous rapper stole my name"
    },
    {
        name:"Calendar",
        clue:"No matter how little or how much you use me, you change me every month. What am I?",
        hint1:"I subtle change my days every year",
        hint2:"You use me to keep track of deadlines"
    }
]

var indexList = [0,1,2,3,4,5,6,7,8,9]; 
var index = 0;
var X_number = 1;

document.getElementById('clue').textContent = whatList[index].clue;

function setClue(index){
    document.getElementById('clue').textContent = whatList[index].clue;
}

document.getElementById('hint1button').addEventListener("click", function(){
    document.getElementById('hint1').textContent = whatList[index].hint1;
});

document.getElementById('hint2button').addEventListener("click", function (){
    document.getElementById('hint2').textContent = whatList[index].hint2;
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
    if (input != whatList[index].name.toLowerCase()){
        document.getElementById(X).appendChild(img)
        X_number += 1
        if(X_number == 6){
            document.getElementById('results').textContent = "Sorry you ran out of attempts, the answer is: "+ whatList[index].name
        }
    }
    else{
        document.getElementById('results').textContent = 'You guess correctly! it is: '+ whatList[index].name
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




