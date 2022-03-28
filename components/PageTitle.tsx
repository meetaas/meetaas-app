import Head from "next/head";

export default function PageTitle(props: { title: string }) {
    const title = `Meetaas: ${props.title}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={title} key="title" />
        </Head>
    )
}
