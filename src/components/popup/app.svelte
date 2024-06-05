<script lang="ts">
  import { onMount } from "svelte";
  import { appStore, storage } from "../../storage";
  import "./app.pcss";
  import MuteUsers from "./mute-users.svelte";
  import Info from "./info.svelte";
  import Links from "./links.svelte";

  onMount(() => {
    appStore.subscribe((data) => {
      storage.set(data);
    });
  });

  type Tab = "MUTE" | "LINKS" | "INFO";

  let selectedTab: Tab = "MUTE";

  function withToggleTab(tab: Tab) {
    return () => {
      selectedTab = tab;
    };
  }
</script>

<div class="bg-base-100 min-h-[450px] w-[500px] p-4 dark">
  <div class="mb-2">
    {#if selectedTab === "MUTE"}
      <MuteUsers />
    {:else if selectedTab === "LINKS"}
      <Links />
    {:else if selectedTab === "INFO"}
      <Info />
    {/if}
  </div>
  <div class="btm-nav btm-nav-sm">
    <button
      on:click={withToggleTab("MUTE")}
      class:active={selectedTab === "MUTE"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
        />
      </svg>

      <span class="btm-nav-label">User mute</span>
    </button>
    <button
      on:click={withToggleTab("LINKS")}
      class:active={selectedTab === "LINKS"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
      <span class="btm-nav-label">Links</span>
    </button>
    <button
      on:click={withToggleTab("INFO")}
      class:active={selectedTab === "INFO"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>

      <span class="btm-nav-label">About</span>
    </button>
  </div>
</div>
