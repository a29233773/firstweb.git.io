function show() {
    // 獲得id為info的input標籤的內容
    var a = document.getElementById('info').value;
    // 顯示，在id為result處動態顯示（清除舊的顯示新的）
    document.getElementById('result').innerText = a;
    }