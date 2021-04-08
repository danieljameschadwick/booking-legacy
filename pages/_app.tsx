import { Wrapper } from "../src/util/state/Store";
import "../src/styles/base/_base.scss";

const App = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    );
};

export default Wrapper.withRedux(App);
