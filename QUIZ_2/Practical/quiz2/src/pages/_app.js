import '../styles/globals.css'

export default function App({ Component, pageProps}) {
    return (
        // <SessionProvider session={session}>
            <Component {...pageProps} />
        // </SessionProvider>
    )
}