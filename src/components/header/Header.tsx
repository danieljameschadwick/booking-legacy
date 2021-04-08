import Userbar from "./Userbar";
import Link from "next/link";

const Header = () => {
    return (
        <div>
             <Userbar />

             <div className={"header navbar"}>
                <div className={"container"}>
                    <div className={"navbar-brand link link--black-base"}>
                        <Link href={"/"}>
                            <a>{process.env.NEXT_PUBLIC_SITE_NAME}</a>
                        </Link>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Header;
