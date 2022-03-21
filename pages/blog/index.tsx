import Link from 'next/link'
import Container from '../../components/container'
import Router from 'next/router'

export default function Blog(props) {
    return <Container>
        <div>Blogs</div>
        <Link href="/blog/first"><a>First blog</a></Link>
        <a onClick={() => Router.push('/blog/second')}>Second Post</a>
        <div>Next stars: {props.stars}</div>
    </Container>
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
       props: { stars: json.stargazers_count }
    }
 }