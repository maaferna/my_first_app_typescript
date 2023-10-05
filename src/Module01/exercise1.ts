/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

    let firstName2:string;
    let lastName2:string;
    let fullName: string;
    let age2:number = 42;
    let ukCitizen: boolean;
    
    firstName2 = 'Rebecca';
    lastName2 = 'Smith';

    ukCitizen = false;
    fullName = firstName2 + " " + lastName2;
    
    if (ukCitizen) {
        console.log("My name is " + fullName + ", I'm " + age2 + ", and I'm a citizen of the United Kingdom.");
    } else {
        console.log("My name is " + fullName + ", I'm " + age2 + ", and I'm not a citizen of the United Kingdom.");
    }