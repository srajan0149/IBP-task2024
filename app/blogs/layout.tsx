import { Divider } from "@/components/primitives";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
      <p className="text-3xl">Blogs</p>
      <Divider/>
        {children}
  </>);
}
