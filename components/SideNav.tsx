import { Navbar } from '@mantine/core';
import Link from 'next/link';

export default function SideNav() {
  return (
    <Navbar width={{ base: 300 }}> 
      <Navbar.Section><Link href="/discussion"><a>Discussions</a></Link></Navbar.Section>
    </Navbar>
  );
}