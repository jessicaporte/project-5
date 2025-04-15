import { useEffect } from "react";
import { useRouter } from "next/router";

export default function IndexPage() {
  //renderizo esta pagina que quedo vacia siendo la principal a art-pieces
  const router = useRouter();

  useEffect(() => {
    router.push("/Spotlight");
  }, [router]);

  return null;
}
