let user_score = 0;
let com_score = 0;
for (let i = 1; i <= 10; i++)
{
    console.log(`Round [${i}]`)
    console.log(`User score : ${user_score}\nComputer score : ${com_score}`);
    let mychoice = prompt("Choose 's' 'w' 'g' : ")
    mychoice = mychoice.toUpperCase();
    let computer = ['S','W','G'];
    let comchoice = computer[Math.floor(Math.random() * computer.length)];
    if (mychoice == comchoice)
    {
        console.log('Its a draw');    
    }
    else if (mychoice == 'S' && comchoice == 'W' || mychoice == 'W' && comchoice == 'G' || mychoice == 'G' && comchoice == 'S')
    {
        console.log('You win this round');
        user_score++;
    }
    else if (mychoice == 'W' && comchoice == 'S' || mychoice == 'G' && comchoice == 'W' || mychoice == 'S' && comchoice == 'G')
    {
        console.log('Computer win this round');
        com_score++;
    }
}
if (user_score > com_score)
{
    console.log('Match result : You Win');
    console.log(`User Score : ${user_score}\nComputer Score : ${com_score}`);
}
else if (user_score < com_score)
{
    console.log('Match result : Computer win');
    console.log(`User Score : ${user_score}\nComputer Score : ${com_score}`);
}
else
{
    console.log('Match result : TIE');
    console.log(`User Score : ${user_score}\nComputer Score : ${com_score}`);
}