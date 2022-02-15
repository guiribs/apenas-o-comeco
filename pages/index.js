import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/sobre">
                <a>Clica ai Alejandro para acessar página Sobre</a>
            </Link>
        </div>
    )
}

export default Home