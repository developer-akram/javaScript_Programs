function guessNum() {
    let guess = parseInt(Math.random() * 100);
    let trylimit = 0;
    do {
        console.log(`Chances left : ${20 - trylimit}`);
        let myguess = parseInt(prompt('Enter number to guess : '));
        if (guess - myguess > 80 || guess - myguess < -80)
        {
            console.log('Guess is too far');
        }
        else if (guess - myguess > 40 || guess - myguess < -40)
        {
            console.log('Guess is little far');
        }
        else if (guess - myguess > 20 || guess - myguess < -20)
        {
            console.log('Guess is little near');
        }
        else if (guess - myguess > 5 || guess - myguess < -5)
        {
            console.log('Guess is too close');
        }
        else if (guess - myguess >= -5 || guess - myguess <= 5)
        {
            if (guess == myguess)
            {
                console.log(`Guess is Sucess in ${trylimit} attempts.Lucky Number is ${guess}`);
                break;
            }
            console.log('Just a little bit more...');
        }
        trylimit++
    }
    while (trylimit <= 20)
    console.log(`Try Limit exceed...! Number was : ${guess}`);
}
