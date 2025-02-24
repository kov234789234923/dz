let a = Math.floor(Math.random() * 100);
let b = a;

console.log('Nach chislo a:', a, 'Nach chislo b:' , b)

//Tern1
//(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
//Задание: 
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()


//if...else


if (a > 10) {
    a = a
} else {
    a = a*2
 }

if ( a > 5 ) {
    console.log('Resuit a:', (2 * a) + 1)
} else {

    if (a < 3 ) {
        a = 1
    } else {
        a = 2 * (a - 2)
    }

    if ( a > 4) {
        a = 5
    } else {
        if ( a % 2 == 0 ) {
            a = 6
        } else { a = 7}
    }

    console.log('Resuit a:', a)

}

//switch
switch(true) {
    case b > 10:
        b = b
        break;
    case b < 10 :
        b = b*2
        break;}
switch(true){
    case  b > 5:
        console.log('Resuit b:', (2 * b) + 1)
        break;
    default: 
       switch (true) {
        case b < 3:
            b = 1
            break;
        default: 
        b = 2 * (b - 2)
        case b > 4: 
        b = 5
        break;
        case b < 4:
            switch( true ) {
                case b % 2 == 0:
                    b = 6
                    break;
                default:
                    b = 7
    
            }
    
            break;

       }
       console.log('Resuit b:', b)
       
}



//Tern2
/* function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    
    return (
      a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
  }

  /////я заменила a === 15 на a !==15 чтобы число соответствовало "but a is not 15"
  
  manyChecks(); */

  //Задание: // условие с условным (тернарным) оператором перевести в if...else И switch()
  // результат выводить в консоль, с пощью console.log()

  //if ... else

  function manyChecks() {
    let c = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${c}`);
  
    let result = '';
  
    if (c > 10) {
      result += 'a is bigger than 10';
    } else {
      result += 'a is less than or equal to 10';
      if (c === 5) {
        result += ' an example of a special case';
      }
    }
  
    if (c !== 15) {
      result += ' but a is not 15';
    }
  
    if (c > 5) {
      result += ' and a is greater than 5';
    } else {
      result += ' and a is less than or equal to 5';
    }
  
    if (c % 2) {
      result += ' and a is odd';
    } else {
      result += ' and a is even';
    }
  
    console.log(result);
    return result;
  }
  
  manyChecks();


  //switch

  function manyChecks1() {
    let d = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${d}`);
  
    let result = '';
  
  switch (true) {
    case d > 10:
      result += 'a is bigger than 10';
      break;
    default:
      result += 'a is less than or equal to 10';
      
      switch (true) {
        case d === 5:
          result += ' an example of a special case';
          break;
      }
      break;
  }

  switch (true) {
    case d !== 15:
      result += ' but a is not 15';
      break;
  }

  
  switch (true) {
    case d > 5:
      result += ' and a is greater than 5';
      break;
    default:
      result += ' and a is less than or equal to 5';
      break;
  }

  switch (true) {
    case d % 2 !== 0:
      result += ' and a is odd';
      break;
    default:
      result += ' and a is even';
      break;
  }

  console.log(result);
  return result;
  }
  
  manyChecks1();