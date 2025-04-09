// 获取DOM元素
const container = document.getElementById('container');

// 计数器
let counter = 0;

// 生成随机字符串函数
function add_new_chars(x, randomize = true) {
    let n = x;
    if (randomize) {
        n = Math.floor(Math.random() * x) + 1;
    }
    let str = '';
    for (let i = 0; i < n; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}

// 页面加载初始化
window.onload = function() {
    container.textContent = add_new_chars(3);
};

// 键盘事件监听
window.addEventListener('keyup', function(e) {
    const firstChar = container.textContent[0];
    
    // 按对首字符
    if (e.key === firstChar) {
        container.textContent = container.textContent.substring(1);
        counter = 0;
    } 
    // 按错键
    else {
        // 记录错误次数
        counter++;
        
        // 连续两次错误后追加6个固定长度字符
        if (counter >= 2) {
            container.textContent += add_new_chars(6, false);
            counter = 0;
        }
        
        // 每次错误都追加随机字符
        container.textContent += add_new_chars(3);
    }
});