import Head from "next/head";
import Layout from "../src/components/layout/Layout";

const Index = () => {
    return (
        <Layout>
            <Head>
                <title>{process.env.NEXT_PUBLIC_META_NAME}</title>
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
