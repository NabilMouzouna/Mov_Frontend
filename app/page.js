'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.push('/movies') // The empty dependency array ensures this runs after component mount

  return <></>;
}
