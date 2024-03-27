document.addEventListener("DOMContentLoaded", function () {
	console.log("Le site Web est prêt ca fait plaisir !");
});

const connectButton = document.getElementById("connectButton");
const walletID = document.getElementById("walletID");

connectButton.addEventListener("click", () => {
   if (typeof window.ethereum !== "undefined") {
       ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        const account = accounts[0];
        walletID.innerHTML = `Wallet connected: ${account}`;
      });
   } else {
       window.open("https://metamask.io/download/", "_blank");
   }
});
