import { Html, Main, NextScript, Head } from "next/document";

function Document() {
    return (
        <Html className="dark">
            <Head/>
            <body className="dark:bg-black">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document