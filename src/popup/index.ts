import Popup from "../components/popup/app.svelte";
import { appStore, storage } from "../storage";

// Action popup
// https://developer.chrome.com/docs/extensions/reference/action/

function render() {
  const target = document.getElementById("app");

  if (target) {
    storage.get().then((data) => {
      appStore.set(data);

      console.log(">>>>>>", data);

      new Popup({
        target,
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", render);
