import hljs from "highlight.js";

export default function MarkdownChecker() {
    const handleLinkTarget = () => {
        Array.from(document.querySelectorAll(".markdown-content a")).forEach(
            (link) => (link.target = "_blank")
        );
    };

    const highlightCode = () => {
        hljs.highlightAll();
        console.clear();
    };

    return { handleLinkTarget, highlightCode };
}
