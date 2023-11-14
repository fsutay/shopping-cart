class MathFunction{
    static applyDiscount(price:number, discount:number):number{
       return discount
        ? (price - (price * discount) / 100)
        : price;
    }
}
export default MathFunction;

