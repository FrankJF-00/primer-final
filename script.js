const colorWheel = document.getElementById("color-wheel");
const colorDialogue = document.getElementById("color-dialogue");
const colorButtons = document.getElementsByClassName("color-btn");
const closeBtn = document.getElementById("close");

const menuItems = document.getElementsByClassName("sidebar-item");
const currentLocation = document.getElementById("current-location");

const root = document.documentElement;
let style = getComputedStyle(root);
let color = style.getPropertyValue("--bg-color");
let txtColor = style.getPropertyValue("--txt-color");

for (const item of menuItems) {
  item.addEventListener("click", () => {
    currentLocation.innerText = item.innerText;
  });
}

colorWheel.addEventListener("click", () => {
  if (colorDialogue.style.visibility === "hidden") {
    colorDialogue.style.visibility = "visible";
  } else {
    colorDialogue.style.visibility = "hidden";
  }
});
for (const colorBtn of colorButtons) {
  colorBtn.style.backgroundColor = colorBtn.innerText;
  colorBtn.addEventListener("click", () => {
    root.style.setProperty("--bg-color", colorBtn.innerText);
    root.style.setProperty("--txt-color", colorBtn.title);
    newChart.data.datasets[0].backgroundColor =
      getComputedStyle(root).getPropertyValue("--txt-color");
    newChart.update();
  });
}
closeBtn.addEventListener("click", () => {
  colorDialogue.style.visibility = "hidden";
});

//hide color dialogue
colorDialogue.style.visibility = "hidden";

// chart.js
const chartContainer = document.getElementById("chart-container");
const ctx = document.getElementById("myChart");

const newChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "Mai",
      "June",
      "Juli",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "some reference",
        data: [12, 19, 3, 5, 2, 3, 7, 9, 2, 17, 10, 19],
        borderWidth: 1,
        backgroundColor: txtColor,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function getRandomInt(v) {
  newChart.data.datasets[0].data = [];
  for (let i = 0; i < v; i++) {
    let randomInt = Math.floor(Math.random() * 20);
    newChart.data.datasets[0].data.push(randomInt);
  }
}

const filterBtn = document.getElementsByClassName("filter-btn");
for (const btn of filterBtn) {
  btn.addEventListener("click", () => {
    switch (btn.id) {
      case "1":
        newChart.data.labels = [];
        newChart.data.labels.push(
          "January",
          "February",
          "March",
          "April",
          "Mai",
          "June",
          "Juli",
          "August",
          "September",
          "October",
          "November",
          "December"
        );
        getRandomInt(12);
        break;
      case "2":
        newChart.data.labels = [];
        for (let i = 0; i < 30; i++) {
          newChart.data.labels.push(i + 1);
        }
        getRandomInt(30);
        break;
      case "3":
        newChart.data.labels = [];
        newChart.data.labels.push(
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        );
        getRandomInt(7);
        break;
      case "4":
        newChart.data.labels = [];
        for (let i = 0; i < 24; i++) {
          newChart.data.labels.push(i + 1 + "h");
        }

        getRandomInt(24);
        break;
    }
    newChart.update();
  });
}
