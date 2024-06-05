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

  function removeUser(index: number) {
    $appStore.muteUsers.users.splice(index, 1);
    $appStore.muteUsers.users = $appStore.muteUsers.users;
  }
</script>

<div class="space-y-2 flex flex-col">
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text font-semibold tracking-wide">On</span>
      <input
        type="checkbox"
        class="toggle toggle-primary"
        bind:checked={$appStore.muteUsers.on}
      />
    </label>
  </div>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text font-semibold tracking-wide">Blur</span>
      <input
        type="checkbox"
        class="toggle toggle-primary"
        bind:checked={$appStore.muteUsers.blur}
      />
    </label>
  </div>
  <div class="join">
    <input
      class="input input-bordered input-primary join-item grow"
      bind:value={userToAdd}
    />
    <button class="btn btn-primary btn-outline join-item" on:click={addUser}
      >Add user</button
    >
  </div>
  <div class="flex flex-row flex-wrap gap-2 pt-4 max-h-36 overflow-y-auto">
    {#each $appStore.muteUsers.users as user, index}
      <div class="badge badge-primary gap-1">
        <span>{user}</span>
        <button on:click={() => removeUser(index)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-4 h-4 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path></svg
          >
        </button>
      </div>
    {:else}
      <div class="prose">
        <p>No users currently muted.</p>
      </div>
    {/each}
  </div>
</div>
<div role="alert" class="alert mt-4">
  <div class="flex flex-row gap-2 place-items-center">
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
</div>
