// select dom elements
const counterContainer = document.getElementById("counterContainer");

// render state in the ui
function addCounterHTML(counter, index, incrementBy, decrementBy) {
  const counterHTML = document.createElement("div");
  // adding counter HTML Parent div classes
  counterHTML.classList =
    "p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow";
  // adding inner HTML for counterHTML
  counterHTML.innerHTML = `
  
  <div class="text-2xl font-semibold" >${counter}</div>
          <div class="flex space-x-3">
            <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" onclick="incrementClick(${index})">
              Increment: ${incrementBy}
            </button>
            <button class="bg-red-400 text-white px-3 py-2 rounded shadow" onclick="decrementClick(${index})">
              Decrement: ${decrementBy}
            </button>
          </div> `;
  // adding add counter event listener
  counterContainer.appendChild(counterHTML);
}

function render() {
  const counters = store.getState();
  counters.map((counter, index) => {
    const { count, incrementBy, decrementBy } = counter;
    addCounterHTML(count, index, incrementBy, decrementBy);
  });
}

render();
