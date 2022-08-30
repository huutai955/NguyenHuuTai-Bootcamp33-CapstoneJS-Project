let getDataProduct = () => {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'

    });


    promise.then(function (result) {
    renderProduct(result.data.content);
    });

    promise.catch(function (error) {
        console.log(`Error: ${error}`);
    })
}


let renderProduct = (product) => {
    let output = '';

    for (let index = 0; index < product.length; index++) {
        output += `
                <div class="product__col">
                    <div class="product__item">
                        <div class="img">
                            <img src="${product[index].image}" alt="">
                        </div>
                        <div class="detail">
                            <h3>${product[index].name}</h3>
                            <p>${product[index].shortDescription}</p>
                        </div>
                        <div class="buy">
                            <button>
                            <a href="./detail.html?id=${product[index].id}">Buy Now</a>
                            </button>
                            <span>${product[index].price}$</span>
                        </div>
                    </div>
                 </div>
        `;
    }
    document.querySelector("#product__row").innerHTML = output;
    return output;
}
// https://shop.cyberlearn.vn/api/Product/getbyid?id=12

let getDetailProduct = (param) => {
    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${param}`,
        method: 'GET'
    });

    promise.then(function (result) {
        console.log(result.data.content.image);
        renderDetail(result.data.content);
    })


    promise.then(function (error) {
        console.log(error);
    })
}

window.renderDetail = (product) => {
    let html = '';
    let str = '';
    for (let index=0;index<product.size.length;index++) {
        let size = product.size[index];
        let spanTag = size.replace(";", " ");
        str += `
        <span>
        ${spanTag}
        </span>
        `
         html = `
        <div class="detail__img">
        <img src="${product.image}" alt="">
        </div>
        <div class="detail__info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <h4>Available size</h4>
        <div class="size">
            ${str}
        </div>
        <span>${product.price}$</span>
        <div class="amount">
        <button>+</button>
        <span>1</span>
        <button>-</button>
        </div>
        <button>Add to cart</button>
        </div>
        `;
    }

    document.getElementById("detail__container").innerHTML = html;
}






window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log('params',myParam)
    getDataProduct();
    getDetailProduct(myParam);
}











