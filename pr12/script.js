let counter = 1;
let interval;


function addNotification() {
  counter++;
  const notifications = document.getElementById("notification-list");
  const li = document.createElement('li');
  li.textContent = "Уведомление " + counter;
  li.classList.add("notification-list-item");
  notifications.appendChild(li);

  const count = document.getElementById("counter");
  count.textContent = counter;
}

function startCounter() {
	interval = setInterval(addNotification, 3000);
}

function stopCounter() {
  clearInterval(interval);
  setTimeout(startCounter, 10000);
}


document.getElementById("btn").addEventListener("click", function() {
  stopCounter();
});


startCounter();


// создание листа

const list = document.getElementById("list");

function createListItem() {
  const content = prompt("Введите содержимое пункта списка:");

  if (content === null || content === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = content;
  list.appendChild(li);

  createListItem();
}

document.getElementById("btn-list").addEventListener("click", function() {
  createListItem();
});

// показать уведомление

function showNotification(options) {
  const notification = document.createElement("div");
  notification.classList.add("notification_2");
  notification.innerText = options;
  document.body.appendChild(notification);
  setTimeout(function() {
    document.body.removeChild(notification);
  }, 1500);
}

document.getElementById("btn-not").addEventListener("click", function() {
  showNotification("kek");
});
