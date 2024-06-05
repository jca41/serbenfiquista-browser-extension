<script lang="ts">
  const LINKS: { label: string; href: string }[] = [
    {
      label: "Best 24H",
      href: "https://serbenfiquista.com/forum/index.php?action=bestLikes&section=sport&time=24",
    },
    {
      label: "Best 4H",
      href: "https://serbenfiquista.com/forum/index.php?action=bestLikes&section=sport&time=4",
    },
    {
      label: "Alerts",
      href: "https://serbenfiquista.com/forum/index.php?action=profile;area=showalerts",
    },
  ];
</script>

<div class="flex gap-2">
  {#each LINKS as link}
    <a target="_blank" href={link.href} class="btn btn-primary">{link.label}</a>
  {/each}
</div>
