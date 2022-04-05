import { Button, Group, Header, Menu, Title, Text } from '@mantine/core';
import Link from 'next/link';

export default function TopNav() {
    return (
        <Header height={70} p="md">
            <Group position='apart'>
                <Link href="/"><Title style={{ cursor: "pointer" }}>Meetaas</Title></Link>
                <Menu trigger="hover"
                    control={
                        <Button>
                            <Link href="/discussion">
                                <Text>Discussions</Text>
                            </Link>
                        </Button>
                    }>
                    <Link href="/discussion/new">
                        <Menu.Item >
                            <Text>Add Discussion</Text>
                        </Menu.Item>
                    </Link>
                </Menu>
            </Group>
        </Header>
    );
}