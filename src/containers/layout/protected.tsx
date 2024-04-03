'use client'
import React, {FC, ReactNode, useEffect, useState, Fragment} from "react"
import { Constants } from "@/src/utils/constnts";
import { useRouter } from "next/navigation";

const Protected: FC<{children: ReactNode}> = ({children}) => {
    const Router = useRouter()
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const userInfo = localStorage.getItem(Constants.USER_INFO);

        // console.log("protected info ==  ", userInfo.phone);
        
        if (!userInfo) {
            Router.push(`/signin?redirect=${window.location.pathname}`);
        } else {
            setVerified(true);
        }
    }, [Router]);

    if (verified) {
        return (<Fragment>{children}</Fragment>)
    } else {
        return null;
    }
}

export default Protected;
