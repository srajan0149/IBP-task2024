import { Link } from "@nextui-org/link";

export const Footer = () => {
    return (
        <div className="w-full bg-slate-900 mt-10 p-30 min-h-32 flex items-center justify-center py-3 text-gray-300">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
        </div>
    )
}