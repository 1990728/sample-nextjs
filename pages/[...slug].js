export async function getServerSideProps(context) {
  const { slug } = context.params;
  const searchParams = context.req.url.split('?')[1] || '';

  // Construct the path from slug array
  const path = Array.isArray(slug) ? slug.join('/') : '';
  
  // Build destination URL
  const baseUrl = 'https://mtinpad.com/r?';
  const destination = `${baseUrl}${path}${searchParams ? `&${searchParams}` : ''}`;

  return {
    redirect: {
      destination,
      permanent: false, // Set to true for 301 redirect
    },
  };
}

// Empty component since we're redirecting server-side
export default function RedirectPage() {
  return null;
}
