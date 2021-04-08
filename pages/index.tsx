import Head from "next/head";
import Layout, { siteTitle } from "../src/components/layout/Layout";

const Index = () => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={"container"}>
                
            </div>
        </Layout>
    )
};

export default Index;

export async function getStaticProps() {
    return {
        props: {}
    };
};
