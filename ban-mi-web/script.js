const menu = [
    { id: 1, name: "Bánh mì trứng", price: 20000 },
    { id: 2, name: "Bánh mì thịt", price: 25000 },
    { id: 3, name: "Bánh mì chả", price: 23000 }
];

let orders = JSON.parse(localStorage.getItem("orders")) || [];

function renderMenu() {
    const menuContainer = document.getElementById("menu");
    if (menuContainer) {
        menuContainer.innerHTML = "";
        menu.forEach(item => {
            const div = document.createElement("div");
            div.innerHTML = `<p>${item.name} - ${item.price} VND</p>
                <button onclick="placeOrder(${item.id})">Đặt hàng</button>`;
            menuContainer.appendChild(div);
        });
    }
}

function placeOrder(itemId) {
    const item = menu.find(m => m.id === itemId);
    orders.push({ ...item, status: "Đang xử lý" });
    localStorage.setItem("orders", JSON.stringify(orders));
    alert("Đơn hàng đã được đặt!");
    renderOrders();
}

function renderOrders() {
    const ordersContainer = document.getElementById("orders");
    if (ordersContainer) {
        ordersContainer.innerHTML = "";
        orders.forEach(order => {
            const div = document.createElement("div");
            div.innerHTML = `<p>${order.name} - ${order.price} VND - ${order.status}</p>`;
            ordersContainer.appendChild(div);
        });
    }
}

function renderAdminOrders() {
    const adminContainer = document.getElementById("admin-orders");
    if (adminContainer) {
        adminContainer.innerHTML = "";
        orders.forEach((order, index) => {
            const div = document.createElement("div");
            div.innerHTML = `<p>${order.name} - ${order.price} VND - ${order.status}</p>
                <button onclick="completeOrder(${index})">Hoàn tất</button>`;
            adminContainer.appendChild(div);
        });
    }
}

function completeOrder(index) {
    orders[index].status = "Đã hoàn thành";
    localStorage.setItem("orders", JSON.stringify(orders));
    renderAdminOrders();
}

window.onload = function() {
    renderMenu();
    renderOrders();
    renderAdminOrders();
};