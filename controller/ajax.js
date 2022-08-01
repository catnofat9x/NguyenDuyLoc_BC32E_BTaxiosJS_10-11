function layDuLieuSanPham() {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/GetAll',
        method: 'GET'
    });
    promise.then(function (result) {
        console.log(result.data);
        renderDSSanPham(result.data)
    });
    promise.catch(function (err) {
        console.log(err);
    })
}

//Tạo sản phẩm 
document.querySelector('#btnCreate').onclick = function () {
    var sp = new SanPham();

    sp.id = document.querySelector('#productId').value;
    sp.img = document.querySelector('#productImage').value;
    sp.name = document.querySelector('#productName').value;
    sp.price = document.querySelector('#productPrice').value;
    sp.description = document.querySelector('#productDescription').value;
    sp.type = document.querySelector('#productType').value;
    console.log(sp);
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/CreateProduct',
        method: 'POST',
        data: sp
    });
    promise.then(function (result) {
        console.log(result.data);
        layDuLieuSanPham();
    });
    promise.catch(function (err) {
        console.log(err);
    })

}
window.onload = function () {
    layDuLieuSanPham();
};

//Xóa sản phẩm
function xoaSanPham(idDelete) {
    alert(idDelete)
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/DeleteProduct/'+ idDelete,
        method: 'DELETE'
    });

    //SUCCESS
    promise.then(function (result) {
        console.log('Xóa sản phẩm thành công');
        layDuLieuSanPham()
    });
    promise.catch(function (err) {
        console.log(err);
    });
}

//Edit Product
function suaSanPham(id) {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/GetById' + id,
        method: 'PUT'
    });
    //SUCCESS
    promise.then(function (result) {
        var sp = result.data
        sp.id = document.querySelector('#productId').value = sp.id
        sp.img = document.querySelector('#productImage').value = sp.img
        sp.name = document.querySelector('#productName').value = sp.name
        sp.price = document.querySelector('#productPrice').value = sp.price
        sp.description = document.querySelector('#productDescription').value = sp.description
        sp.type = document.querySelector('#productType').value = sp.type
    });
    promise.catch(function(err){
        console.log(err);
    });
}

//UPDATE DATA
document.querySelector('#btnUpdate').onclick = function(){
    var upDateSP = new SanPham();
    upDateSP.id = document.querySelector('#productId').value;
    upDateSP.img = document.querySelector('#productImage').value;
    upDateSP.name = document.querySelector('#productName').value;
    upDateSP.price = document.querySelector('#productPrice').value;
    upDateSP.description = document.querySelector('#productDescription').value;
    upDateSP.type = document.querySelector('#productType').value;
    var promise = axios({
        url:'http://svcy.myclass.vn/api/Product/UpdateProduct' + upDateSP.id,
        method:'PUT',
        data:upDateSP
    });
    promise.then(function(){
        layDuLieuSanPham()
    });
    promise.catch(function(err){
        console.log(err);
    })
}

//SEACH PRODUCT BY NAME
document.querySelector('#btnSeach').onclick = function(){
    var seachByName = document.querySelector('#inputSeach').value;
    var promise = axios({
        url:'http://svcy.myclass.vn/api/Product/SearchByName?name=',
        method:'GET',
        data:seachByName
    });
    promise.then(function(result){
        renderDSSanPham(result.data)
    });
    promise.catch(function(err){
        console.log(err);
    });
}