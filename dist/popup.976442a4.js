baseUrl = 'https://eth.2miners.com/api/accounts/';
const autoCompleteJS = new autoComplete();
window.onload = function() {
    const table = document.getElementById("table");
    const walletIdInput = document.getElementById("walletID");
    const IdLabel = document.getElementById("IdLabel");
    const requestBtn = document.getElementById("requestBtn");
    const alert = document.getElementById("alert");
    requestBtn.onclick = async ()=>{
        try {
            id = walletIdInput.value;
            const request = baseUrl + id;
            const response = await fetch(request);
            const data = await response.json();
            var r_24Reward = (data['24hreward'] / 1000000000).toFixed(6);
            var r_balance = (data['stats']['balance'] / 1000000000).toFixed(6);
            var r_hashrate = (data['currentHashrate'] / 1000000).toFixed(2);
            document.getElementById("24hReward").innerHTML = r_24Reward;
            document.getElementById("balance").innerHTML = r_balance;
            document.getElementById("workersOnline").innerHTML = data['workersOnline'];
            document.getElementById("hashrate").innerHTML = r_hashrate + " MH/s";
            table.classList.toggle('hidden');
            walletIdInput.classList.toggle('hidden');
            IdLabel.classList.toggle('hidden');
            alert.classList.add("hidden");
        } catch  {
            alert.classList.remove("hidden");
        }
    };
};

//# sourceMappingURL=popup.976442a4.js.map
