import { AppShell } from '@mantine/core';
import TopNav from './TopNav';

export default function Layout({ children }) {
  return (
    <AppShell
      padding="md"
      header={<TopNav />}
      styles={(theme) => ({
        main: {
          minHeight: "100vh",
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
        },
      })}
    >
      {children}
    </AppShell>
  );
}