userWallet = 'https://eth.2miners.com/api/accounts/0x93382bF5F8578EfAf73A3bCC0483CCD9151dc7Cb';
async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("24hReward").innerHTML = "Past 24h Reward: " + data['24hreward'];
    document.getElementById("24hReward").innerHTML = "Past 24h Reward: " + data['stats'];
}
getData(userWallet);

//# sourceMappingURL=popup.28c164d2.js.map
