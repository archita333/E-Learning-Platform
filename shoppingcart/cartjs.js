
let carts=document.querySelectorAll('.addtocart');
console.log(carts.length)

let products=[
  {
    rs: 100,
    inCart: 0,
    category: "books",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReBlySZxxRN48dnVLBah_tY9R6XCE8TNbIYQ&usqp=CAU",
    thumbnailUrl: "https://via.placeholder.com/130/91c931",
    title: "Physics" 




  },
  {
    "rs": 130,
    "inCart": 0,
    "category": "books",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReBlySZxxRN48dnVLBah_tY9R6XCE8TNbIYQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/771796",
    "title": "Chemistry" 
  },
  {
    "rs": 114,
    "inCart": 0,
    "category": "books",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReBlySZxxRN48dnVLBah_tY9R6XCE8TNbIYQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/12f233",
    "title": "Maths" 
  },
  {
    "rs": 120,
    "inCart": 0,
    "category": "books",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReBlySZxxRN48dnVLBah_tY9R6XCE8TNbIYQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/d21776",
    "title": "Biology" 
  },
  {
    "rs": 90,
    "inCart": 0,
    "category": "books",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReBlySZxxRN48dnVLBah_tY9R6XCE8TNbIYQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/f66b97",
    "title": "English" 
  },
  {
    "rs": 180,
    "inCart": 0,
    "category": "books",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReBlySZxxRN48dnVLBah_tY9R6XCE8TNbIYQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/36a8c1",
    "title": "History" 
  },
  {
    "rs": 200,
    "inCart": 0,
    "category": "books",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReBlySZxxRN48dnVLBah_tY9R6XCE8TNbIYQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/b0f7cc",
    "title": "English Grammer" 
  },
  {
    "rs": 90,
    "inCart": 0,
    "category": "books",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReBlySZxxRN48dnVLBah_tY9R6XCE8TNbIYQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/32176f",
    "title": "Hindi" 
  },
  {
    "rs": 280,
    "inCart": 0,
    "category": "books",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRv1xC_KjfxUMoEtbLGP8bonlXozfYy180XVw&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/31aa97",
    "title": "GK" 
  },
  {
    "rs": 180,
    "inCart": 0,
    "category": "books",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReBlySZxxRN48dnVLBah_tY9R6XCE8TNbIYQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/810b12",
    "title": "Civics" 
  },
 
  {
    "rs": 400,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaJRMVE_Fj3L96wm8gD0OQ3HfveEXAbQsk7w&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/a7c171",
    "title": "top" 
  },
  {
    "rs": 300,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlCbwjyznFGY_KYmHEUEmVqsrKdqrC8d_QEg&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/c70a2d",
    "title":"skinny jeans"
  },
  {
    "rs": 400,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNsyEHFa7tazc2Ybs3I5uRl7gGZYExRrKliw&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/301fe1",
    "title":"blue jeans"
  },
  {
    "rs": 1000,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtFYSvzVspR2fy7p4VTLtJLCSFmdJry2tdJw&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/23183e",
    "title":"t-shirt"
  },
  {
    "rs": 400,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTADA4sE2P8pg7JDRt6c38XtV9SfZmF1lpEBA&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/c96cad",
    "title":"bermuda"
  },
  {
    "rs": 700,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa_6M1oRUCDhJbQ5kkoP3YO7hOkXU6ravYKA&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/2d362d",
    "title":"tank top"
  },
  {
    "rs": 890,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwg5QGrXvL9GCKx3kR6SXD7h6OD58k_kq8eQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/ea31da",
    "title":"sari"
  },
  {
    "rs": 900,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjQrW4SeUYAoL48ZdiZYy6aYqYykfsQteFSw&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/2f3b8d",
    "title":"dress"
  },
  {
    "rs": 2000,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvwrb9kopxzCQ3UvWQ3Cjqxv95ImWhr9H4ug&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/1e71a1",
    "title": "light blue shirt"
  },
  {
    "rs": 1900,
    "inCart": 0,
    "category": "clothing",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkLomg8Bx4wvtp9tFBgemQT8NSbQkIkexvqw&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/2a0b93",
    "title":"lehenga"
  },
  {
    "rs": 500,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQc6scRJS1YlZuz2i_a94rtM66JFKHmWukdg&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/639202",
    "title":"samsung white earphones"
  },
  {
    "rs": 8000,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5pCZhrhYx71fblWK-u0Sr9i7-j46rH41LvA&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/ca30ac",
    "title":"LG tv"
  },
  {
    "rs": 10000,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeQGarNYC6nYneWw1KapzqsBVswhSwrXdvfw&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/6ad227",
    "title":"Redmi 8"
  },
  {
    "rs": 500,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPdl5B1RY4lYcjY8YUiBcqHgDBj2Tz3OxOiQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/19fe9f",
    "title":"mouse"
  },
  {
    "rs": 400,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzb7uRZqPfzMDoOXh6GY23QO_TvrFc4GWl4Q&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/c2082a",
    "title":"vivo charger"
  },
  {
    "rs": 2000,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRo_W4j_6CwC91hFbU3sXFEA_XckJWB4RVFSw&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/e9b68",
    "title":"philips trimmer"
  },
  {
    "rs": 900,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0RKNQ5yOlYNGEgA59_lGgKuu8o6vKwxqX3g&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/b2211f",
    "title":"philips  hair dryer"
  },
  {
    "rs": 1800,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQobwojIea0iIzs3rtYX2_TDXt7jn8oWwR1H-CAywWX3tLL5exVjYXmw1Pj&usqp=CAc",
    "thumbnailUrl": "https://via.placeholder.com/130/68e0a8",
    "title":"Mixer grinder"
  },
  {
    "rs": 4000,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPYM9V2qXN3CN6__29nCrzNsLa8RQXIiiAy6swvqOACgJ9MOGK4DZDfRkCWSU&usqp=CAc",
    "thumbnailUrl": "https://via.placeholder.com/130/1cd88b",
    "title":"juicer"
  },
  {
    "rs": 40000,
    "inCart": 0,
    "category": "electronics",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS11LZKrijT7cjXocPg0OmEm_EaA1uUsuBKTA&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/9e39da",
    "title":"Laptop"
  },
  {
    "rs": 400,
    "inCart": 0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1xonOcf5-jGRejiviKZW2WVNge9oUmxpcoA&usqp=CAU",
    "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8T47KHQdkN0XK2JoN2ly5xquyCYrw3pO1IA&usqp=CAU",
    "title":"basketball"
  },
  {
    "rs": 500,
    "inCart": 0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfXtsNIKo5GQVMe5HdeSTmnuOyjla0huNteA&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/111fa2",
    "title":"football"
  },
  {
    "rs": 90,
    "inCart": 0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSSlZp9MkyE8doE94tVCqN6Bhv-dus_WrrIhg1ns2ag&s",
    "thumbnailUrl": "https://via.placeholder.com/130/6efc3f",
    "title":"tennis ball"
  },
  {
    "rs": 1,
    "inCart": 0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRY-9bPN33aQbZEbdXudLKi3NDzUd7sRuHpQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/aa8f1e",
    "title":"badminton racket "
  },
  {
    "rs": 200,
    "inCart": 0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRei35SleAlwsBYf3oPegGZtVAN_wglzEbS5A&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/3e02a2",
    "title":"shuttlecock"
  },
  {
    "rs": 2300,
    "inCart": 0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVzTKVtNC5lafQvEMiCDIVJZ_2tkifLl8POA&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/f9f067",
    "title":"cricket bat           "
  },
  {
    "rs": 700,
    "inCart": 0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4Xy8LWdvroR-E7CnYrxVoLo3kRtCaV7qXBA&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/93acce",
    "title":"batting gloves            "
  },
  {
    "rs": 110,
    "inCart": 0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHXiUdjgAkuXcGmyTj1kd-YMpK7F1bAG8D9A&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/cde2c1",
    "title":"sports drink"
  },
  {
    "rs": 2000,
    "inCart":0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuks47RtSSyY54CPXsOMWti_4l2RLDyEoEwQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/a26a91",
    "title":"sports shoe          "
  },
  {
    "rs": 1000,
    "inCart":0,
    "category": "sports",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx6wTYHqqWw6ia5yynyJZQrMrNEbtOLTDTQQ&usqp=CAU",
    "thumbnailUrl": "https://via.placeholder.com/130/212399",
    "title":"yoga mat            "
  },
];






 
for(let i=0;i<carts.length;i++){
        carts[i].addEventListener('click', () =>{
                console.log('added to cart');
               cartNumbers(products[i]);
               totalCost(products[i]);
        
               
        })

}
function onLoadCartnos(){
let productNumbers=localStorage.getItem('cartNumbers');
console.log(productNumbers)
if(productNumbers){
        document.querySelector('.cartno span').textContent=productNumbers;
}

}
//function to calculate cartnumbers
function cartNumbers(product){

        let productNumbers= localStorage.getItem('cartNumbers');
         productNumbers=parseInt(productNumbers);
        console.log(productNumbers)
        console.log(typeof(productNumbers))
        if(productNumbers){
           localStorage.setItem('cartNumbers',productNumbers+1);
            document.querySelector('.cartno span').textContent= productNumbers+1;
       }
        else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cartno span').textContent=1;
       }
       setItems(product);

}
function setItems(product){

  let cartItems=localStorage.getItem('productsInCart');
  cartItems=JSON.parse(cartItems);
  console.log('my product are',cartItems)
  if(cartItems!=null){
    if(cartItems[product.title]==undefined){
       cartItems={
          ...cartItems,
          [product.title]: product

       }


    }
    cartItems[product.title].inCart +=1;

  }
  else{
product.inCart=1;
 cartItems={
  [product.title] :product
}
}
localStorage.setItem("productsInCart",JSON.stringify(cartItems)) ; 

}
//function to calculate total cost of items in cart
function totalCost(product){
  let cartCost=localStorage.getItem('totalCost');
  
  if(cartCost !=null){
    cartCost=parseInt(cartCost);
    localStorage.setItem('totalCost',cartCost+product.rs);
  }
 else{
        localStorage.setItem('totalCost',product.rs);


 }



}

onLoadCartnos();

