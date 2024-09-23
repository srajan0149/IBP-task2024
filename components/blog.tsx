'use client';
import {Link} from "@nextui-org/link";
import {useState} from "react";

interface Blog_info {
    title: string;
    author: string;
    href: string;
    children: any;
  }

export const Blog = ({title,author,href,children}:Blog_info) => {
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

        <p className="text-xl text-3 font-semibold"><Link href={href}>{title}</Link></p>
        <span className="text-sm block text-slate-900 italic pl-5 md-3 dark:text-slate-200">&mdash; {author}</span>
        <p className={"text-sm p-3 "+(isActive?"block":"hidden")}>
            {children}
        </p>
    </div>
    );
}
