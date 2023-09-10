'use client'

import { Button } from '../_components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
  return (
	  <>
		   <Link
          href='/'
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Go to Other page
        </Link>
      <header style={{ padding: 30 }}>
        <h1>Home Page </h1>
        <p>Sling Academy</p>
      </header>
    <Button onClick={()=>router.push('/csr',{scroll:true})}> GO to CSR</Button>
    <Button onClick={()=>router.replace('ssr')}> GO to SSR</Button>
    <Button onClick={()=>router.refresh()}> rephrasing the page </Button>
      <div style={{ height: 1000, background: 'purple' }}></div>
      <footer style={{ padding: 30, background: 'pink' }}>
        <Link
          href='/'
          scroll={false}
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Go to Other page
        </Link>
      </footer>
    </>
  );
}
