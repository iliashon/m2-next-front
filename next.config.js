/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ce246-aliakseitupalski-php81.neklodev.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
