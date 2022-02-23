userWallet = 'https://eth.2miners.com/api/accounts/';
async function getData(url) {
    id = document.getElementById("walletID").value;
    url = url + id;
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("24hReward").innerHTML = data['24hreward'];
    document.getElementById("balance").innerHTML = data['stats']['balance'];
    document.getElementById("workersOnline").innerHTML = data['workersOnline'];
}

//# sourceMappingURL=popup.a2bbf49a.js.map
