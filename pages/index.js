// pages/[...path].js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CatchAllPage() {
  const router = useRouter();

  useEffect(() => {
    // Get the path WITHOUT the leading slash
    const path = router.asPath.startsWith('/') 
      ? router.asPath.slice(1) 
      : router.asPath;

    // Redirect to xxxx.com/r?[path]
    window.location.replace(`https://mtinpad.com/r?${path}`);
  }, [router]);

  return <div></div>;
}
