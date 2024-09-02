import React, { FC } from "react";

import { env } from "@/lib/env";


interface Props {
    className?: string;
}

const FooterApp:FC<Props> = ({
    className = ''
}) => {
    return (
        <footer className={`py-10 ${className} `}>
            <div className="px-6">
                <div className="">
                    <p className="text-xs">Copyright &copy; {new Date().getFullYear()} OUNCH SDN BHD. ALL RIGHTS RESERVED</p>
                    <p className="text-xs">{env.APP_VERSION}</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterApp;



