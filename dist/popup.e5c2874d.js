baseUrl = 'https://eth.2miners.com/api/accounts/';
window.onload = function() {
    document.getElementById("");
    document.getElementById("requestBtn").onclick = async ()=>{
        id = document.getElementById("walletID").value;
        const request = baseUrl + id;
        const response = await fetch(request);
        const data = await response.json();
        document.getElementById("24hReward").innerHTML = data['24hreward'];
        document.getElementById("balance").innerHTML = data['stats']['balance'];
        document.getElementById("workersOnline").innerHTML = data['workersOnline'];
    };
};

//# sourceMappingURL=popup.e5c2874d.js.map
