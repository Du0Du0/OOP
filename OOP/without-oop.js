var BEANS_GRAMN_PER_SHOT = 7;
var coffeeBeans = 0;
function makeCoffee(shots) {
    if (coffeeBeans < shots * BEANS_GRAMN_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMN_PER_SHOT;
    return {
        shots: shots,
        hasMilk: false,
    };
}
coffeeBeans += 3 * BEANS_GRAMN_PER_SHOT;
var coffee = makeCoffee(2);
console.log(coffee);
