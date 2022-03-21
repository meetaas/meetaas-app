import { Burger, Header, MediaQuery, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

export default function TopNav() {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    return (
        <Header height={70} p="md">
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>

                <Text><Link href="/">Meetaas</Link></Text>
            </div>
        </Header>
    );
}