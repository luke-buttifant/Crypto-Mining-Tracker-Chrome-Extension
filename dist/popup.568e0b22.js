userWallet = 'https://eth.2miners.com/api/accounts/';
window.onload = function() {
    document.getElementById("requestBtn").addEventListener("click", getData(userWallet));
};
async function getData(url) {
    id = document.getElementById("walletID").value;
    const request = url + id;
    const response = await fetch(request);
    const data = await response.json();
    document.getElementById("24hReward").innerHTML = data['24hreward'];
    document.getElementById("balance").innerHTML = data['stats']['balance'];
    document.getElementById("workersOnline").innerHTML = data['workersOnline'];
}

//# sourceMappingURL=popup.568e0b22.js.map
