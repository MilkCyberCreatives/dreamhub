import dynamic from 'next/dynamic';

const Studio = dynamic(() => import('sanity').then((m) => m.Studio), { ssr: false });
const config = dynamic(() => import('../../sanity/sanity.config'), { ssr: false });

export default function AdminStudio() {
  // @ts-ignore
  return <Studio config={config} />;
}
