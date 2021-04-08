import Head from "next/head";
import Header from "../header/Header";

export const siteTitle = "Ecommerce";

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />

                <meta
                    name="description"
                    content="Ecommerce written in React, NextJS, Tailwind and (some) TypeScript."
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            
            <Header />

            <main>{children}</main>
        </div>
    );
};

export default Layout;
