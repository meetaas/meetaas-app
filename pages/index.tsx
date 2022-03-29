import { Title, Text, Container } from '@mantine/core';

export default function HomePage() {
  return (
    <Container fluid style={{height: "100%"}}>
      <Title align="center" >
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Meetaas
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
      Makes your disucssion organized and productive.
      </Text>
    </Container>
  );
}
