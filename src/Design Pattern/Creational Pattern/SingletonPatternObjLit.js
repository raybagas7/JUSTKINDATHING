const Logging = {
  logs: [],
  addLog(log) {
    this.logs.push(log);
  },
  viewLogs() {
    console.log(this.logs);
  },
};

const loggingA = Logging;
const loggingB = Logging;

loggingA.addLog('log 1');
loggingB.addLog('log 2');
loggingB.addLog('log 3');

console.log(loggingA.viewLogs()); // ["log 1","log 2","log 3"]
