import Link from "next/link";

const Userbar = () => {
    return (
        <div className={"userbar navbar"}>
            <div className={"container"}>
                <div className={"navbar-brand"}></div>

                <div className={"navbar-end"}>
                    <Link href={"/login"}>
                        <a>Login</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Userbar;
