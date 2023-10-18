let serverNameInput = document.getElementById('serverName');
let serverForm = document.getElementById('serverForm');
let serverTbody = document.querySelector('#serverTable tbody');
let allServers = {};
let serverId = 0;

serverForm.addEventListener('submit', submitServerInfo);

serverTbody.addEventListener("click", function (e) {
  if (e.target.className === "deleteBtn") {
    e.target.parentElement.remove();
    delete allServers[e.target.parentElement.id];

    updateServerTable();
  }
});

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  let repeated = false;
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;

  for (let key in allServers) {
    if (allServers[key].serverName === serverName) {
      repeated = true;
      serverNameInput.value = '';
    }
  }

  if (serverName && !repeated) {
    serverId++;
    allServers['server' + serverId] = { serverName };
    updateServerTable();
    serverNameInput.value = '';
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length;

    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + tipAverage.toFixed(2));
    appendDeleteBtn(newTr);

    serverTbody.append(newTr);
  }
}