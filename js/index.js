

let getDataProduct = () => {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'

    });

    promise.then(function (result) {
    renderProduct(result.data.content);
    console.log(result.data);
    });

    promise.catch(function (error) {
        console.log(`Error: ${error}`);
    })
}


window.renderProduct = (product) => {
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



window.onload = function () {
    getDataProduct();
}



