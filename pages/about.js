import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div>asPath: {router.asPath}</div>
      <div>
        query: <pre>{JSON.stringify(router.query, null, 2)}</pre>
      </div>
    </div>
  );
}
