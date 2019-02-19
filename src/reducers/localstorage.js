var layout = "base", settingsName = "remark." + layout + ".skinTools"

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(settingsName);
    if (serializedState === null) {
      return ({
          sidebar: "dark",
          navbar: "primary",
          navbarInverse: "false",
          primary: "primary"
      });
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (el) => {
  try {
    const serializedState = JSON.stringify(el);
    localStorage.setItem(settingsName, serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
