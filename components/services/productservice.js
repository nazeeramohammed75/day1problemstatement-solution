class ProductService {
    constructor() {
        this.url = "http://apiapptrainingservice.azurewebsites.net/api/products";
    }
    getProducts() {
        let promise = fetch(this.url);
        return promise;
    }
    postProduct(product) {
        let promise = fetch(this.url, {
            method : "POST" ,
            headers : {"content-Type" : "application/json"},
            body : JSON.stringify(product)
        });
        return promise;
    }
    getProductByRowId(ProductRowId) {
        alert('productRowID -- > '+ProductRowId );
    let promise = fetch(this.url, {
        method : "GET" ,
        headers : {"content-Type" : "application/json"},
        body : JSON.stringify(ProductRowId)
    });
    return promise;
   }
}

export default ProductService;