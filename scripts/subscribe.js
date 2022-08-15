store.subscribe(() => {
  const counters = store.getState();
  counterContainer.innerHTML = "";
  render();
});
