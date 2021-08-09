
const coupons = [
    {name: "mitad_precio", discount: 50},
    {name: "primer", discount: 25},
    {name: "gratis", discount: 100}
];


function calcularPrecioConDescuento(precio, descuento) {    
   const porcentajePrecioConDescuento = 100 - descuento;
   const precioConDesuento = (precio * porcentajePrecioConDescuento) / 100; 

   return(precioConDesuento);

}

function makeDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const inputCoupon = document.getElementById("inputCoupon");
    const inputResult= document.getElementById("result");

    const price = inputPrice.value;
    const discount = inputDiscount.value;
    const couponValue = inputCoupon.value;

    if (discount > 0) {
        const priceWhitDiscount = calcularPrecioConDescuento(price, discount);
        inputResult.innerText = "Normal price: " + price 
                            + "\nDiscount %: "+ discount
                            + "\nFinal price: " + priceWhitDiscount;   
    }else{
        const isCouponValid = function (coupon){
            return coupon.name === couponValue;
        };

        const userCoupon = coupons.find(isCouponValid);

        if (!userCoupon) {
            alert("El cupon "+couponValue+" no es valido.");
        }else{
            const couponDiscount = userCoupon.discount;
            const priceWhitDiscount = calcularPrecioConDescuento(price, couponDiscount);
            inputResult.innerText = "Normal price: " + price
                            + "\nCupón: "+couponValue 
                            + "\nDiscount %: "+ discount
                            + "\nFinal price: " + priceWhitDiscount;
        }

    }




    

}    
