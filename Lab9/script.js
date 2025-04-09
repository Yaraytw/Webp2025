function fetchData() {
    var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', openUrl, true);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var dataset = JSON.parse(this.responseText);
            addNewData(dataset);
            alert("已成功獲取最新展覽資料！");
        } else if (this.readyState == 4 && this.status != 200) {
            alert("獲取資料失敗，請稍後再試");
        }
    };
}

function addNewData(dataset) {
    var myTable = document.getElementById("csie").getElementsByTagName('tbody')[0];
    
    // 清除舊資料（保留表頭）
    while(myTable.rows.length > 0) {
        myTable.deleteRow(0);
    }
    
    dataset.forEach(function(data, index) {
        var row = myTable.insertRow(-1);
        row.insertCell(0).innerHTML = data['title'];
        
        // 檢查是否有 showInfo 資料
        if (data['showInfo'] && data['showInfo'].length > 0) {
            row.insertCell(1).innerHTML = data['showInfo'][0]['location'] || '無地點資訊';
            row.insertCell(2).innerHTML = data['showInfo'][0]['price'] || '無票價資訊';
        } else {
            row.insertCell(1).innerHTML = '無地點資訊';
            row.insertCell(2).innerHTML = '無票價資訊';
        }
    });
}

function delOldData() {
    var myTable = document.getElementById("csie").getElementsByTagName('tbody')[0];
    
    // 清除所有資料行（保留表頭）
    while(myTable.rows.length > 0) {
        myTable.deleteRow(0);
    }
    
    alert("已清除所有展覽資料");
}

// 頁面載入時自動獲取資料
window.onload = function() {
    fetchData();
};