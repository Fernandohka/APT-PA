/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: "rickandmortyapi.com"}]
    },

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/matematica",
                destination: "/maths",
            },
            {
                source: "/generalFunction",
                destination: "/generalFunction",
            },
            {
                source: "/cards",
                destination: "/cards",
            },
            {
                source: "/pagina-com-fetch",
                destination: "/fetch-page",
            },
            {
                source: "/pagina-com-axios",
                destination: "/axios-page",
            },
            {
                source: "/pagina-server-side",
                destination: "/server-side",
            }
        ]
    }
};

export default nextConfig;
