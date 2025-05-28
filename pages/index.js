import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CatchAllPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the external domain with the same path
    const path = router.asPath; // Gets the full path (e.g., /adasdas)
    window.location.href = `https://mtinpad.com/?${path}`;
  }, [router]);

  return <div>...</div>;
}
