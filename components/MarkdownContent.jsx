import MarkDown from "markdown-to-jsx";
import useMarkdownChecker from "../hooks/useMarkdownChecker";

import "./MarkdownContent.scss";
import ErrorPage from "./ErrorPage";

export default function MarkdownContent({ fileName, language }) {
    const { post, loading, failedResponse, handleLinkTarget, highlightCode } =
        useMarkdownChecker(fileName, language);

    if (loading) {
        return (
            <>
                <img
                    className="loader"
                    src="/assets/img/tail-spin.svg"
                    alt="Loader"
                />
            </>
        );
    } else if (failedResponse) {
        return (
            <>
                <ErrorPage errorTitle="Error: Something failed, please try again." />
            </>
        );
    } else {
        return (
            <>
                <MarkDown
                    className="markdown-content"
                    options={{
                        wrapper: "section",
                    }}
                >
                    {post}
                </MarkDown>
                {handleLinkTarget()}
                {highlightCode()}
            </>
        );
    }
}
