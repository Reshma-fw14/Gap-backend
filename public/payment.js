var final_item;
function sendData(data){
     final_item=JSON.parse(data)
    console.log("final_item:",final_item)
    display(final_item)
}

// let bill = JSON.parse(localStorage.getItem("bill"));
function display(elem){
    // let checkbox1=document.getElementById("checkbox1").value
    // let checkbox1=document.getElementById("checkbox2").value
    // let checkbox1=document.getElementById("checkbox3").value
    // let checkbox1=document.getElementById("checkbox4").value

    let subtotal = document.getElementById("subtotal");
    subtotal.innerHTML = elem.price[0];

    let total = document.getElementById("total");
    // total.innerHTML =elem.price[0] 
    // console.log(checkbox1)
    // if(checkbox1.checked){
    //   total.innerHTML=(checkbox1+subtotal.shift());
    // }
}

// ------------------------------------payment div----------------------------
  let pay = document.getElementById("pay");
  let payment = document.getElementById("continue");

  payment.onclick = () => {
    payHere();
  };

  function payHere() {
    pay.innerHTML = "";

    let div = document.createElement("div");
    div.setAttribute("class", "flex");

    let cardNo = document.createElement("input");
    cardNo.type = "number";
    cardNo.placeholder = "Credit Card Number";

    let img = document.createElement("img");
    img.src =
      "data:image/jpeg;base64,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";
    img.width = "50";

    let paypalbtn = document.createElement("button");

    let paypal = document.createElement("img");
    paypal.src =
      "https://secure-www.gap.com/Asset_Archive/GPWeb/content/DPG/icons/paypal-logo.svg";
    paypal.width = "90";

    paypalbtn.addEventListener("click", function () {
      //   console.log("hhhh");
      setTimeout(function () {
        alert("otp: 2345 ");
      }, 2000);
    });

    let afterpaybtn = document.createElement("button");
    let afterpay = document.createElement("img");
    afterpay.src =
      "https://secure-www.gap.com/static_content/onesitecategory/components/mfe/shopping-bag/static/eefe7c6af2a0e9697432f1a0647d8076.svg";
    afterpay.width = "90";

    afterpaybtn.append(afterpay);

    paypalbtn.append(paypal);
    div.append(img, cardNo);

    let hr = document.createElement("hr");

    let otp = document.createElement("input");
    otp.placeholder = "Enter otp";

    otp.setAttribute("id", "otp");

    cardNo.type = "number";

    let btn = document.createElement("button");
    btn.textContent = "PAY";

    btn.onclick = () => {
      if (otp.value == "2345") {
        setTimeout(function () {
          alert("Payment Successful ");
        }, 2000);

        setTimeout(function () {
          alert("Your Order is placed ");
        }, 2000);
      } else {
        alert("Wrong Otp");
      }
    };
    pay.append(div, paypalbtn, afterpaybtn, hr, otp, btn);
  }
 

// //----------------shipping charges --------------------
  let shipping_charge= document.getElementById("shipping_charge")
  
  
    const  checked1 = () => {
     let checkbox= document.getElementById("checkbox1").value
     shipping_charge.innerHTML="$"+checkbox

     let a=final_item.price[0];
    a=a.slice(1)
    
    let b=shipping_charge.textContent
    b=b.slice(1)
    
    // console.log(a,b)
    // console.log(typeof(a,b))

    total.innerHTML = "$" + ((+a)+(+b)).toFixed(2);
    setTimeout(function(){
      alert(`your total bill amount is,  ${total.innerHTML}
      please proceed for the payment`)
    },1000)
    // console.log(checkbox)
   }
      
 
   const  checked2 = () => {
    let checkbox= document.getElementById("checkbox2").value
    shipping_charge.innerHTML= "$"+checkbox

    let a=final_item.price[0];
    a=a.slice(1)
    
    let b=shipping_charge.textContent
    b=b.slice(1)
    
    // console.log(a,b)
    // console.log(typeof(a,b))

    total.innerHTML = "$" + ((+a)+(+b)).toFixed(2);
    setTimeout(function(){
      alert(`your total bill amount is,  ${total.innerHTML}
      please proceed for the payment`)
    },1000)
  }
     
 
  const  checked3 = () => {

    let checkbox= document.getElementById("checkbox3").value
    shipping_charge.innerHTML= "$"+checkbox

    let a=final_item.price[0];
    a=a.slice(1)
    
    let b=shipping_charge.textContent
    b=b.slice(1)
    
    // console.log(a,b)
    // console.log(typeof(a,b))

    total.innerHTML = "$" + ((+a)+(+b)).toFixed(2);
    setTimeout(function(){
      alert(`your total bill amount is,  ${total.innerHTML}
      please proceed for the payment`)
    },1000)
  //  console.log(checkbox)
  
  }
     
 
  const  checked4 = () => {

    let checkbox= document.getElementById("checkbox4").value
    shipping_charge.innerHTML= "$"+checkbox

    let a=final_item.price[0];
    a=a.slice(1)
    
    let b=shipping_charge.textContent
    b=b.slice(1)
    
    // console.log(a,b)
    // console.log(typeof(a,b))

    total.innerHTML = "$" + ((+a)+(+b)).toFixed(2);
    setTimeout(function(){
      alert(`your total bill amount is,  ${total.innerHTML}
      please proceed for the payment`)
    },1000)
  //  console.log(checkbox)
  }


