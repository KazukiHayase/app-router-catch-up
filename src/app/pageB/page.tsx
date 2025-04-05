import { NextPage } from "next";
import Link from "next/link";
import { ClientComponent } from "../client";

const Page: NextPage = () => {
  return (
    <div>
      <h1>PageB</h1>
      <p>This is the content of PageB.</p>
      <Link href="/pageA">
        Go to PageA
      </Link>
      <ClientComponent />
    </div>
  );
}

export default Page;
