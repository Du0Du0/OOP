{
    var CoffeeMaker = /** @class */ (function () {
        function CoffeeMaker(coffeeBeans) {
            this.BEANS_GRAMN_PER_SHOT = 7;
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * this.BEANS_GRAMN_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * this.BEANS_GRAMN_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        return CoffeeMaker;
    }());
    var maker = new CoffeeMaker(32);
    console.log(maker);
    var maker2 = new CoffeeMaker(14);
    console.log(maker2);
}
