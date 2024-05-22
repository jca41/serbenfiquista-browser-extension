<script lang="ts">
  import { appStore } from "../../storage";

  let userToAdd = "";

  function addUser() {
    const trimmedUser = userToAdd.trim();

    if (!trimmedUser) {
      return;
    }

    $appStore.muteUsers.users = [...$appStore.muteUsers.users, trimmedUser];

    userToAdd = "";
  }
</script>

<div class="space-y-2 flex flex-col">
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">On</span>
      <input
        type="checkbox"
        class="toggle"
        bind:checked={$appStore.muteUsers.on}
      />
    </label>
  </div>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">Blur</span>
      <input
        type="checkbox"
        class="toggle"
        bind:checked={$appStore.muteUsers.blur}
      />
    </label>
  </div>
  <div class="join">
    <input class="input input-bordered join-item grow" bind:value={userToAdd} />
    <button class="btn join-item" on:click={addUser}>Add user</button>
  </div>
</div>
<div role="alert" class="alert mt-8">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="stroke-current shrink-0 w-6 h-6"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path></svg
  >
  <span>Don't forget to refresh the page after updating the settings.</span>
</div>
