import { Link } from "@nextui-org/link";
import { GithubIcon } from "@/components/icons";

export const Footer = () => {
    return (
        <div className="w-full bg-slate-900 mt-10 p-30 min-h-32 flex justify-evenly py-3 text-gray-300">
            <Link
              isExternal
              className="m-8 text-default-600  text-sm"
              href="https://github.com/srajan0149/IBP-task2024/"
              title="Project Github Page">
                <GithubIcon size={20}/>
                &nbsp;Github Repo
              </Link>
            <Link
              isExternal
              className=" text-sm text-default-600"
              href="https://github.com/srajan0149/"
              title="Srajan's Github Profile">
               <span className="text-default-600">Made by</span> &nbsp;Srajan
              </Link>
            <Link
                isExternal
                className=" text-sm m-8"
                href=""
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">&nbsp;NextUI</p>
              </Link>
        </div>
    )
}