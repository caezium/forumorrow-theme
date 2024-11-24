import { withPluginApi } from "discourse/lib/plugin-api";

withPluginApi.onPageChange((url) => {
        if (url.includes("https://www.forumorrow.com/c/")){
                document.querySelectorAll("list-controls").forEach((el) => {
                        el.style.display = "none";
                });
        }
});