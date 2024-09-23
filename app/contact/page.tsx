import { Container } from "@/components/container";
import { Link } from "@nextui-org/link";

export default function ContactsPage() {
  return (<>
  <Container>
    <p>You can reach out to us for any query regarding our programmes via the following methods.</p>
    <ul className="">
      <br/>
      <li>Email address: <Link href="mailto:abcd@email.com">abcd@email.com</Link></li>
      <li>Telephone number: 91235xxxxx</li>
    </ul>
  </Container>
  </>);
}