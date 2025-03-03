document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-btn');

    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ giao ngay cho bạn.');
        });
    });
});
