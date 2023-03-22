setInterval(function () {
  var statusNavigator = navigator.onLine ? 'online' : 'offline';
  var status = document.getElementById("status");
  status.setAttribute("class", statusNavigator);
  status.innerHTML = statusNavigator;
}, 300);