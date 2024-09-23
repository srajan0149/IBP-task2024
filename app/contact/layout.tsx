import { Divider } from "@/components/primitives";

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
      <p className="text-3xl">Contact Us</p>
      <Divider/>
        {children}
  </>);
}