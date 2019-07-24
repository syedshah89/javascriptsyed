/* let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log ("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log ("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans ();
pressGrindBeans ();


/////////

const getmycoffee = (size, drink) => {
    console.log (`order recieved: ${drink} ${size}`)
}

getmycoffee ("tall", "coffee");

/////////

const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp (7,3);
console.log (addUp (2,5));

/////////

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths (celsius) + 32;
};

console.log ("The temperature is " + getFahrenheit (15) + "°F");



//////

let orderCount = 1;
const takeOrder = (pizzaSize, topping) => {
 console.log(` ${pizzaSize} Pizza with ${topping} topping: order number ${orderCount}`);
 orderCount++; 

}
takeOrder("12inch", "pineapple");
takeOrder ("6inch", "Sweetcorn");



let pin = 1234;
let minAmount = 10;

const cashWithdrawal = (pin, minAmount) => {
    if (pin == 1234 &&  minAmount >= 10 ) {

    }
    else {
    console.log ("Access Denied")
    }

    console.log(`Withdrawing ${minAmount} from account ${pin}`);
}
   
cashWithdrawal(1234, 5);
cashWithdrawal(1234, 20);
cashWithdrawal(1234, 30);


let orderCount = 1;
const takeOrder = (topping1, topping2) => {
 console.log(` ${topping1} Pizza with ${topping2} topping: order number ${orderCount}`);
 orderCount++; 

}
takeOrder("12inch", "pineapple");
takeOrder ("6inch", "Sweetcorn");


let pin = 1234;
let minAmount = 10;

const cashWithdrawal = (pin, minAmount) => {
    if (pin == 1234 &&  minAmount >= 10 ) {

    }
    else {
    console.log ("Access Denied")
    }

    console.log(`Withdrawing ${minAmount} from account ${pin}`);
}

 /////

const sandwitchOrder = (top1, top2, top3, top4, top5) => {
 console.log(`we are preparing your sandwich order: ${top1}, ${top2}, ${top3}, ${top4}, ${top5}')

sandwitchOrder ("12inch", "pineapple");
sandwitchOrder ("6inch", "Sweetcorn");

;*/

