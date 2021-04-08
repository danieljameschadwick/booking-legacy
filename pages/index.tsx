import Head from "next/head";
import Layout from "../src/components/layout/Layout";
import { AppointmentForm } from "../src/components/appointment/AppointmentForm";

const Index = () => {
    return (
        <Layout>
            <Head>
                <title>{process.env.NEXT_PUBLIC_META_NAME}</title>
            </Head>

            <div className={"container"}>
                <AppointmentForm />
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
