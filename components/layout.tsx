import { AppShell, Navbar, Header } from '@mantine/core';
import SideNav from './sidenav';
import TopNav from './topnav';

export default function Layout({ children }) {
  return (
    <AppShell
      padding="md"
      navbar={<SideNav />}
      header={<TopNav />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  );
}