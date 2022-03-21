import { Navbar } from '@mantine/core';
import Link from 'next/link';

export default function SideNav() {
  return (
    <Navbar width={{ base: 300 }}> 
      <Navbar.Section><Link href="/blog"><a>Blogs</a></Link></Navbar.Section>
      <Navbar.Section><Link href="/about"><a>About</a></Link></Navbar.Section>
    </Navbar>
  );
}