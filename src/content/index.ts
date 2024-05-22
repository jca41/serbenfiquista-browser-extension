import { storage, type IStorage } from "../storage";
import "./styles.css";

function sbIsPoster(
  postEl: HTMLElement,
  users: IStorage["muteUsers"]["users"]
) {
  return users.includes(
    postEl?.querySelector<HTMLAnchorElement>(".poster h4 a")?.innerText ?? ""
  );
}

function sbIsQuoted(
  postEl: HTMLElement,
  users: IStorage["muteUsers"]["users"]
) {
  let quoteHeaders: string[] = [];
  postEl
    .querySelectorAll<HTMLElement>("cite a")
    .forEach((el) => quoteHeaders.push(el?.innerText));

  if (!quoteHeaders.length) return false;

  return quoteHeaders.some((header) =>
    users.some((user) => header.includes(user))
  );
}

function sbIsMarkedPost(
  postEl: HTMLElement,
  users: IStorage["muteUsers"]["users"]
) {
  return sbIsPoster(postEl, users) || sbIsQuoted(postEl, users);
}

function sbGetPosts() {
  const topicPosts = document.querySelectorAll<HTMLElement>(".post_wrapper");
  const bestOfPosts = document.querySelectorAll<HTMLElement>(".core_posts");

  return { topic: topicPosts, best: bestOfPosts };
}

const BLUR_CL = "sb-mute-user-blur";
const HIDE_CL = "sb-mute-user-hide";

function sbMuteUsers({ on, blur, users }: IStorage["muteUsers"]) {
  if (!on || !users?.length) {
    return;
  }

  const { topic, best } = sbGetPosts();

  topic.forEach((post) => {
    if (sbIsMarkedPost(post, users)) {
      post?.parentElement?.classList.add(blur ? BLUR_CL : HIDE_CL);
    }
  });

  best.forEach((post) => {
    if (sbIsMarkedPost(post, users)) {
      post.classList.add(blur ? BLUR_CL : HIDE_CL);
    }
  });
}

async function sbStart() {
  const settings = await storage.get();

  sbMuteUsers(settings?.muteUsers);
}

sbStart();
