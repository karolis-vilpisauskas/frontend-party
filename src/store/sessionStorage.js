export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    state.auth.error = "";
    state.auth.success = "";
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (error) {
    // Ignore write errors.
  }
};
