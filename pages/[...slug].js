// pages/[...slug].js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    // Get path segments
    const path = Array.isArray(slug) ? slug.join('/') : '';
    
    // Get existing query parameters
    const searchParams = new URLSearchParams(window.location.search);
    
    // Build destination URL
    const baseUrl = 'https://mtinpad.com/r?';
    const destination = `${baseUrl}${path}${searchParams.toString() ? `&${searchParams.toString()}` : ''}`;
    
    // Perform redirect
    window.location.replace(destination);
  }, [router.isReady, slug]);

  return <div style={{ padding: 20 }}>Redirecting...</div>;
};

// Required for static export but can be empty
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking' // or 'true' if you want client-side fallback
  };
}

export async function getStaticProps() {
  return { props: {} };
}

export default RedirectPage;
