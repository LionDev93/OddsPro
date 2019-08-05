import React from "react";

class WS {
  static init() {
    this.ws = new WebSocket('ws://45.115.39.238:8080');
  }
  static onMessage(handler) {
    this.ws.addEventListener('data', handler);
  }
  static sendMessage(message) {
    // You can have some transformers here.
    // Object to JSON or something else...
    this.ws.send(message);
  }
}