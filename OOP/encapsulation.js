{
    //public
    //private
    //protected
    var CoffeeMaker_1 = /** @class */ (function () {
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMaker.makeMachine = function (coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        };
        CoffeeMaker.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMN_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMN_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            };
        };
        CoffeeMaker.BEANS_GRAMN_PER_SHOT = 7; //static을 붙이면 class level
        return CoffeeMaker;
    }());
    var maker = CoffeeMaker_1.makeMachine(32);
    maker.fillCoffeeBeans(32);
    var User = /** @class */ (function () {
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Object.defineProperty(User.prototype, "fullName", {
            get: function () {
                return "".concat(this.firstName, " ").concat(this.lastName);
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var user = new User('Steve', 'Jobs');
    console.log(user.fullName);
    user.firstName = 'Ellie';
    console.log(user.fullName);
}
