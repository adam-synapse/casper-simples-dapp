
//Create Casper client and service to interact with Casper node.
// const apiUrl = "http://136.243.187.84:7777/rpc";
// const casperService = new CasperServiceByJsonRPC(apiUrl);
// const casperClient = new CasperClient(apiUrl);
window.addEventListener('signer:initialState', (msg) => {
  console.log('Initial State: ', msg.detail);
});

window.addEventListener('signer:connected', (msg) => {
  console.log('connected State: ', msg.detail);
});

window.addEventListener('signer:disconnected', (msg) => {
  console.log('disconnected State: ', msg.detail);
});


const btnConnect = document.getElementById("btnConnect");
btnConnect.addEventListener("click", async () => {
    window.casperlabsHelper.requestConnection();
});

const btnDisconnect = document.getElementById("btnDisconnect");
btnDisconnect.addEventListener("click", () => {
    window.casperlabsHelper.disconnectFromSite();
});