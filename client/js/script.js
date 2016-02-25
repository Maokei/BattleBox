/**
 *  @author maokei
 *  @description Game client
 * */

function init() {
    var websocket;
    var url = "ws://localhost:7777/";
    var webs = window.WebSocket || window.MozWebSocket;
    if(webs) {
        websocket = new WebSocketObject(url);
    }
}

window.onload = function() {
    init();
}
