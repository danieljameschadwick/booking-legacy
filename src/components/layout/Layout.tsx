import Head from "next/head";
import Header from "../header/Header";

export const siteTitle = process.env.NEXT_PUBLIC_META_NAME;
export const metaDescription = process.env.NEXT_PUBLIC_META_DESCRIPTION;

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />

                <meta
                    name="description"
                    content={metaDescription}
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            
            <Header />

            <main>{children}</main>
        </div>
    );
};

export default Layout;
