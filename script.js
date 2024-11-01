document.getElementById('monut').addEventListener('click', function() {
    const password = document.getElementById('mk').value;
    const correctPassword = "101126"; // Mật khẩu đúng 

    if (password === correctPassword) {
        // mở khóa 
        // lấy luôn kết quả của quay
        const result = spinWheel();
        document.getElementById('result').innerText = result;
    } else {
        alert('Mã bảo mật sai. Vui lòng thử lại.');
    }
});

function spinWheel() {
    const randomNum = Math.random();
    if (randomNum < 0.4) {
        return "Chúc mừng! Bạn đã trúng thưởng 1 cốc trà chanh!";
    } else {
        return "Rất tiếc! Bạn đã hụt.";
    }
}
