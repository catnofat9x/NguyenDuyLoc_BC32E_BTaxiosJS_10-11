function renderDSSanPham(arrSanPham) {
    var html = '';
    for (var i = 0; i < arrSanPham.length; i++) {
        var sp = arrSanPham[i];
        html += `

            <tr>
            <td>${sp.id}</td>
            <td><img src="${sp.img}"  width="150" height="150"/></td>
            <td>${sp.name}</td>
            <td>${sp.price}</td>
            <td>${sp.description}</td>
            <td>${sp.type}</td>
            <td><button class="btn btn-danger" id="btnXoa" onclick="xoaSanPham('${sp.id}')">Xóa</button></td>
            <td><button class="btn btn-primary" id="btnChinhSua" onclick="editSanPham('${sp.id}')">Sửa</button></td>
            </tr>
        `;
    }
    document.querySelector('#tblSanPham').innerHTML = html;
}