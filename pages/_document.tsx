import Document, { Html, Head, Main, NextScript } from "next/document";

/** @TODO: functional component? */
class BaseDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context);

        return {
            ...initialProps
        };
    }

    render() {
        return (
            <Html lang="en" className="dark">
                <Head />

                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default BaseDocument;
