export default function Custom404() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.5rem' }}>Page Not Found</p>
            <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Looking for <b><a href="https://doc.cloudypad.gg">Cloudy Pad Documentation</a></b>? It&apos;s been moved to <b><a href="https://doc.cloudypad.gg">https://doc.cloudypad.gg</a></b></p>
        </div>
    );
}