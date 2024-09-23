'use client';

import {useState} from "react";

export const Blog = ({title,author,children}) => {
    const [isActive, setIsActive] = useState(false);

    const show = () => {
        setIsActive(true);
    }
    const hide = () => {
        setIsActive(false);
    }

    return (
    <div onMouseEnter={show}
         onMouseLeave={hide}
         className="m-5 p-3 pl-10 bg-inherit border border-slate-400 rounded-xl hover:bg-slate-100 hover:dark:bg-slate-900">

        <p className="text-xl text-3 font-semibold">{title}</p>
        <span className="text-sm block text-slate-900 italic pl-5 md-3 dark:text-slate-200">&mdash; {author}</span>
        <p className={"text-sm p-3 "+(isActive?"block":"hidden")}>{children}</p>
    </div>
    );
}
