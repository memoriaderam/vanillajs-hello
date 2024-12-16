let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function Who (){
let randomNumberWho = Math.floor(Math.random()*4);
if (randomNumberWho == 0){
    console.log(who[0]);
    return Who = [(who[0])];
} else if (randomNumberWho == 1){
    console.log(who[1]);
    return Who = [(who[1])];
} else if (randomNumberWho == 2){
    console.log(who[2]);
    return Who = [(who[2])];
} else if (randomNumberWho == 3){
    console.log(who[3]);
    return Who = [(who[3])];
}
}
console.log(Who());

function Action (){
let randomNumberAction = Math.floor(Math.random()*4);
if (randomNumberAction == 0){
    console.log(action[0]);
    return Action = [(action[0])];
} else if (randomNumberAction == 1){
    console.log(action[1]);
    return Action = [(action[1])];
} else if (randomNumberAction == 2){
    console.log(action[2]);
    return Action = [(action[2])];
} else if (randomNumberAction == 3){
    console.log(action[3]);
    return Action = [(action[3])];
}
}
console.log(Action());

function What (){
let randomNumberWhat = Math.floor(Math.random()*3);
if (randomNumberWhat == 0){
    console.log(what[0]);
    return What = [(what[0])];
} else if (randomNumberWhat == 1){
    console.log(what[1]);
    return What = [(what[1])];
} else if (randomNumberWhat == 2){
    console.log(what[2]);
    return What = [(what[2])];
} 
}
console.log(What());

function When (){
let randomNumberWhen = Math.floor(Math.random()*5);
if (randomNumberWhen == 0){
    console.log(when[0]);
    return When = [(when[0])];
} else if (randomNumberWhen == 1){
    console.log(when[1]);
    return When = [(when[1])];
} else if (randomNumberWhen == 2){
    console.log(when[2]);
    return When = [(when[2])];
} else if (randomNumberWhen == 3){
    console.log(when[3]);
    return When = [(when[3])];
} else if (randomNumberWhen == 4){
    console.log(when[4]);
    return When = [(when[4])];
}
}
console.log(When());
	//}

}


