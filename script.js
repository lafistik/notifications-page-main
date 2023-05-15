const notifications = document.querySelectorAll(".notification");
const readAll = document.querySelector(".mark-read");
const unreadNum = document.querySelector(".unread-num");
let counter = 0;

// CHECK CURRENT ACTIVE NOTIFICATIONS

checkActive();

// REMOVE CLASS ACTIVE ON A CLICK OF A BUTTON

readAll.addEventListener("click", function () {
  markRead();
  checkActive();
});

// REMOVE CLASS ACTIVE FROM NOTIFICATIONS USING LOOP

function markRead() {
  notifications.forEach((notification) => {
    notification.classList.remove("active");
    counter = 0;
  });
}

// CHECK ACTIVE NOTIFICATIONS

function checkActive() {
  notifications.forEach((n) => {
    if (n.classList.contains("active")) {
      counter++;
    }
  });
  unreadNum.innerHTML = counter;
  return counter;
}

// REMOVE CLASS ACTIVE WHEN USER CLICKS ON A NOTIFICATION

notifications.forEach((n) => {
  n.addEventListener("click", () => {
    n.classList.remove("active");
    counter = 0;
    checkActive();
  });
});
