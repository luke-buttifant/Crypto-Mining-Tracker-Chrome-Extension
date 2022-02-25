baseUrl = 'api/accounts/';
window.onload = function() {
    const select = document.getElementById('serverOptions');
    const table = document.getElementById("table");
    const walletIdInput = document.getElementById("walletID");
    const IdLabel = document.getElementById("IdLabel");
    const requestBtn = document.getElementById("requestBtn");
    const alert = document.getElementById("alert");
    const optionsLbl = document.getElementById("optionsLabel");
    requestBtn.onclick = async ()=>{
        var frequency = 'MH/s';
        try {
            var server = select.options[select.selectedIndex].value;
            id = walletIdInput.value;
            var request = server + baseUrl + id;
            const response = await fetch(request);
            const data = await response.json();
            var r_24Reward = (data['24hreward'] / 1000000000).toFixed(6);
            var r_balance = (data['stats']['balance'] / 1000000000).toFixed(6);
            var r_hashrate = (data['currentHashrate'] / 1000000).toFixed(2);
            if (r_hashrate > 1000) frequency = 'GH/s';
            document.getElementById("24hReward").innerHTML = r_24Reward;
            document.getElementById("balance").innerHTML = r_balance;
            document.getElementById("workersOnline").innerHTML = data['workersOnline'];
            document.getElementById("hashrate").innerHTML = r_hashrate + frequency;
            table.classList.toggle('hidden');
            walletIdInput.classList.toggle('hidden');
            IdLabel.classList.toggle('hidden');
            alert.classList.add("hidden");
            select.classList.toggle("hidden");
            optionsLbl.classList.toggle("hidden");
        } catch  {
            alert.classList.remove("hidden");
            select.classList.remove("hidden");
            optionsLbl.classList.remove("hidden");
        }
    };
};

//# sourceMappingURL=popup.e9f69b92.js.map
