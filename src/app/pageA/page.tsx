import { NextPage } from "next";
import Link from "next/link";
import { ClientComponent } from "../client";

const Page: NextPage = () => {
  return (
    <div>
      <h1>PageA</h1>
      <p>This is the content of PageA.</p>
      <Link href="/pageB">
        Go to PageB
      </Link>
      <ClientComponent />
    </div>
  );
}

export default Page;
