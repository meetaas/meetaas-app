import { Button, Title, Text, Center, SimpleGrid } from "@mantine/core"
import Link from "next/link";

export default function DefaultErrorFallback() {
    return (
        <Center>
            <SimpleGrid cols={1}>
                    <Title>We are sorry!!!.</Title>
                    <Text>Something is not working at our end, please try again later.</Text>
                    <Link href="/discussion"><Button>All Dsicussions</Button></Link>
            </SimpleGrid>
        </Center>
    );
}
