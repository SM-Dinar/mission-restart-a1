const url='https://fakestoreapi.com/products'

// all products in card gird fetch
const allProducts=()=>fetch(url)
.then(res=>res.json())
  .then(productsData=>{
    displayProducts(productsData);

  });

  // all products in card gird show
const displayProducts=(productsData)=>{
  const showProducts=document.getElementById('products')
  showProducts.innerHTML='';
  productsData.forEach(data=>{
    const newDiv=document.createElement('div')
 
  newDiv.innerHTML=`<div class="bg-white-300 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
    
      <div class="bg-slate-300 h-64 flex items-center justify-center p-4">
        <img src="${data.image}" alt="Product" class="max-w-full max-h-full object-contain" />
      </div>

      
      <div class="p-5 flex flex-col grow gap-3">
        <div class="flex justify-between items-center">
          <span class="bg-indigo-100 badge badge-soft badge-primary font-bold">
          ${data.category.toUpperCase()}
          </span>
          <div class="flex items-center text-sm text-gray-500">
            <span class="text-yellow-400 mr-1"><i class="fa-solid fa-star-half-stroke"></i></span>
            <span>${data.rating.rate}(${data.rating.count})</span>
          </div>
        </div>

     
        <div class="grow">
          <h3 class="text-gray-800 font-semibold text-lg line-clamp-2">${data.title}</h3>
          <p class="text-gray-900 font-bold text-xl mt-1">$ ${data.price}</p>
        </div>

      
        <div class="flex gap-3 mt-auto pt-2">
          <button class="flex-1 flex items-center justify-center gap-2 border border-gray-500 py-2.5 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition btn" onclick="my_modal_2.showModal();fetchModal(${data.id})">
            <i class="fa-regular fa-eye"></i> 
            Details  
          </button>
          <button class="flex-1 flex items-center justify-center gap-2 bg-indigo-600 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-indigo-700 transition">
            <i class="fa-solid fa-cart-shopping"></i>Add
          </button>
        </div>
      </div>
    </div>`
  showProducts.append(newDiv)

  })
}


// trending products fetch
const trendingProducts=()=>fetch(url)
.then(res=>res.json())
.then(productsData=>trendProducts(productsData));
// trending products show
const trendProducts=(productsData)=>{
  const trendProducts=document.getElementById('tredProducts')
   let count=0;
for(let data of productsData){
    if(count>=3){
      break;
    }
    else{
        if(data.rating.rate>4.6){
       const newDiv=document.createElement('div')
       newDiv.innerHTML=`<div class="bg-white-300 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
    
      <div class="bg-slate-300 h-64 flex items-center justify-center p-4">
        <img src="${data.image}" alt="Product" class="max-w-full max-h-full object-contain" />
      </div>

      
      <div class="p-5 flex flex-col grow gap-3">
        <div class="flex justify-between items-center">
          <span class="bg-indigo-100 badge badge-soft badge-primary font-bold">
          ${data.category.toUpperCase()}
          </span>
          <div class="flex items-center text-sm text-gray-500">
            <span class="text-yellow-400 mr-1"><i class="fa-solid fa-star-half-stroke"></i></span>
            <span>${data.rating.rate}(${data.rating.count})</span>
          </div>
        </div>

     
        <div class="grow">
          <h3 class="text-gray-800 font-semibold text-lg line-clamp-2">${data.title}</h3>
          <p class="text-gray-900 font-bold text-xl mt-1">$ ${data.price}</p>
        </div>

      
        <div class="flex gap-3 mt-auto pt-2">
          <button class="flex-1 flex items-center justify-center gap-2 border border-gray-500 py-2.5 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition btn" onclick="my_modal_2.showModal();fetchModal(${data.id})">
            <i class="fa-regular fa-eye"></i> 
            Details  
          </button>
          <button class="flex-1 flex items-center justify-center gap-2 bg-indigo-600 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-indigo-700 transition">
            <i class="fa-solid fa-cart-shopping"></i>Add
          </button>
        </div>
      </div>
    </div>`
  trendProducts.append(newDiv);
  count++;

    }
  
    }
  }
}
trendingProducts();

function productsLoading(){
  
  const heroSection =document.getElementById('hero-section')
  heroSection.classList.add('hidden');
  const whyUs =document.getElementById('why-us')
  whyUs.classList.add('hidden');
  const trending =document.getElementById('trending')
  trending.classList.add('hidden');
  const productsCardGrid =document.getElementById('products-card-grid')
  productsCardGrid.classList.remove('hidden');
  const showAllProducts=document.getElementById('catagorey-btn')
  showAllProducts.classList.remove('hidden');
  showAllProducts.innerHTML=''
  const allButton=document.createElement('div');
  allButton.innerHTML=`<button class="btn" onclick="allProducts()">All</button>`
  showAllProducts.append(allButton)
  const url='https://fakestoreapi.com/products/categories'
  const catagoreyShow=fetch(url)
  .then(res=>res.json())
  .then(productsData=>showCatagoreyBtn(productsData));
  const showCatagoreyBtn=(showCatagorey)=>{
    for(let catagorey of showCatagorey){
      let catagoreySelects=catagorey;
      allButton.innerHTML+=`<button class="btn" onclick="loadCatagoreyProducts(\`${catagorey}\`)">${catagorey}</button>`
      showAllProducts.append(allButton)
    }
   
  }
  allProducts();
 
}
function loadCatagoreyProducts(catagorey){
  const url=`https://fakestoreapi.com/products/category/${catagorey}`;
  fetch(url)
.then(res=>res.json())
  .then(productsData=>displayProducts(productsData));
  
  
}

function homeComing(){
  const heroSection =document.getElementById('hero-section')
  heroSection.classList.remove('hidden');
  const whyUs =document.getElementById('why-us')
  whyUs.classList.remove('hidden');
  const trending =document.getElementById('trending')
  trending.classList.remove('hidden');
  const productsCardGrid =document.getElementById('products-card-grid')
  productsCardGrid.classList.add('hidden');
  const showAllProducts=document.getElementById('catagorey-btn')
  showAllProducts.classList.add('hidden');


}
const modalId=document.getElementById('my_modal_2')


function fetchModal(productId){

const url=`https://fakestoreapi.com/products/${productId}`;

fetch(url)
.then(res=>res.json())
.then(productsData=>showModal(productsData));

}
function showModal(productsData){
 const modalId=document.getElementById('my_modal_2')
  modalId.innerHTML=` <div class="modal-box">

    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-bold">${productsData.title}</h3>
    <p class="py-4">${productsData.description}</p>
    <div class="flex justify-between">
      <p class="py-4">Price:${productsData.price}</p>
      <p class="py-4">Rating:<i class="fa-solid fa-star-half-stroke"></i> ${productsData.rating.rate}</p>
    </div>
    <div class="flex  justify-between gap-20">
      <button class="flex-1 bg-indigo-600 p-2.5 rounded-lg text-sm font-semibold text-white hover:bg-indigo-700 transition"><i class="fa-regular fa-credit-card"></i>Buy Now
      </button>
      <button class="flex-1 bg-indigo-600 p-2.5 rounded-lg text-sm font-semibold text-white hover:bg-indigo-700 transition"><i class="fa-solid fa-cart-shopping"></i>Add to Cart
      </button>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>` 
}

