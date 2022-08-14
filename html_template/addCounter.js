// getting counter container
const counterContainer = document.getElementById("counterContainer");

// getting add counter button
const addCounter = document.getElementById("addCounter");

// writing counter HTML
const counterHTML = document.createElement("div");

// adding counter HTML Parent div classes
counterHTML.classList =
  "p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow";

// adding inner HTML for counterHTML
counterHTML.innerHTML = `<div class="text-2xl font-semibold">0</div>
          <div class="flex space-x-3">
            <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow">
              Increment
            </button>
            <button class="bg-red-400 text-white px-3 py-2 rounded shadow">
              Decrement
            </button>
          </div>`;

// adding add counter event listener
addCounter.addEventListener("click", () => {
  counterContainer.appendChild(counterHTML);
});
