//welcome message
var connection = new WebSocket('wss://csokavar.hu/finger', "finger-protocol");
connection.onmessage = function (e) {
    console.log(e.data);
};
