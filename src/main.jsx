'use strict';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// const sharedBuffer = new SharedArrayBuffer(4); // Размер достаточный для одного Int32
// const sharedArray = new Int32Array(sharedBuffer);

// const worker = new Worker('worker.js');
// worker.postMessage({ sharedBuffer });

// const countEl = document.getElementById('count');

// // Слушаем сообщения от worker для обновления счётчика
// worker.onmessage = function(e) {
//     countEl.textContent = e.data;
// };

// document.getElementById('visitButton').addEventListener('click', function() {
//     worker.postMessage('visit');
// });


// Service Worker registration
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('service-worker.js', {}).then(function(registration) {
//       console.log('Service Worker registered with scope: ', registration.scope);
//     }).catch(function(err) {
//       console.log('Service Worker registration failed: ', err);
//     });
// }