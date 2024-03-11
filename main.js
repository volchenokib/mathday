'use strict';
import { day } from "./utils/currentDay";

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
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {}).then(function(registration) {
      console.log('Service Worker registered with scope: ', registration.scope);
    }).catch(function(err) {
      console.log('Service Worker registration failed: ', err);
    });
}

const URL =`https://numod-20528-default-rtdb.europe-west1.firebasedatabase.app/nums/${day}.json`;

// Get data from the server
fetch(URL,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
    })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('data-container');
    container.textContent = data.value;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    document.getElementById('data-container').textContent = 'Error loading the data';
  });

