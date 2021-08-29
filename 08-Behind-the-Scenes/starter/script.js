'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        let output = `${firstName} ,you are ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear >=1981 && birthYear <=1996) {
            const firstName = 'Steven';
            const str = `Oh you are a millenial, ${firstName}`
            console.log(str);

            // reassigning variable 'output' in block scope
            output = "NEW OUTPUT!"

            function add(a,b) {
                return a + b;
            }
        }
        //console.log(add(2,2));
        console.log(output);
    }

    printAge();

    return age;
};

const firstName = 'Jonas';

calcAge(1991);

