//function to display the cart
function displayCart(){

  let cartItems=localStorage.getItem('productsInCart');
cartItems=JSON.parse(cartItems);
console.log("hhh",cartItems)

let productContainer=document.querySelector(".productstable");
let cartCost=localStorage.getItem('totalCost');
if(cartItems && productContainer){
productContainer.innerHTML='';
Object.values(cartItems).map(item =>{
productContainer.innerHTML+=`<tr class='del'><td class="c1">${item.title}</td>
<td class="c5"><img width="60" height="60"src='${item.url}'></td>
<td class="c2">${item.rs}</td>
<td class="c3"><span>${item.inCart}</span></td>
<td class="c4">${item.inCart*item.rs}</td>
<td class='c6'><button onclick="hapus(this)" class="buttonrem">REMOVE</td></tr>
`;


});
productContainer.innerHTML +=`<tr><h2>TotalCost=Rs.${cartCost}</h2><button class="buttonrem">Purchase</button></tr>`;

}

}
//function that operates on clicking remove button and it updates the totalcost and cartno
function hapus(r){
  var i = r.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTable"); 
  
  var deletedelement=table.rows[i].cells[0].innerText;
  //console.log("del",deletedelement);
  //alert(deletedelement,"hh")
  document.getElementById("myTable").deleteRow(i);
  let productsInCart=[];
  
  let productNumbers= localStorage.getItem('cartNumbers');
localStorage.setItem('cartNumbers',0);
var totalnoofitems=0;
let totalcost= localStorage.getItem('totalCost');
localStorage.setItem('totalCost',0);
var total=0;

        
  Object.values(JSON.parse(localStorage.getItem('productsInCart'))).map(data=>{
	
            
	
    if(data.title!==deletedelement){
	   
		//localStorage.setItem('cartNumbers','cartNumbers'+data.incart); not working
      productsInCart.push(data);
    totalnoofitems=totalnoofitems+data.inCart;
total=total+data.inCart*data.rs;
       
	  }
  });
  
  localStorage.setItem('cartNumbers',totalnoofitems);

  localStorage.setItem('totalCost',total);
  
  localStorage.setItem('productsInCart',JSON.stringify(productsInCart));
  window.location.reload();
  }

 
        


displayCart();

