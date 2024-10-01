/** @type {import('next').NextConfig} */
const nextConfig = {

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
            }
        ]
    }
};

export default nextConfig;
