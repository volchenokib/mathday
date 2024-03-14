let sharedArray

onmessage = function (e) {
  if (e.data.sharedBuffer) {
    sharedArray = new Int32Array(e.data.sharedBuffer)
  } else if (e.data === "visit") {
    // Используем Atomics для атомарного увеличения счётчика
    const currentCount = Atomics.add(sharedArray, 0, 1)
    // Отправляем обновлённое значение обратно в главный поток
    postMessage(currentCount + 1) // Atomics.add возвращает старое значение, поэтому прибавляем 1
  }
}
