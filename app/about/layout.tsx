import { Divider } from "@/components/primitives";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
      <p className="text-3xl">About</p>
      <Divider/>
        {children}
  </>);
}
