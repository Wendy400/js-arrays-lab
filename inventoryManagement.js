// Write your code here
const products=["Laptop", "Phone", "Headphones", "Monitor"]
function logFirstProduct(){
  console.log(products[0])
}
logFirstProduct()

function addProduct(name){
   products.push("Tablet")
console.log(products)
}
addProduct()

 function updateProductName(){
    products[1]="Smartphone"
 console.log(products)
 }
 updateProductName()
 


 function removeLastProduct(){
  products.pop()
  console.log(products)
 }
 removeLastProduct()
  
 







// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
