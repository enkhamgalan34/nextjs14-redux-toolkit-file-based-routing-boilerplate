SERVER_URL: process.env.NEXT_PUBLIC_API_BASE_URL;

const nextConfig = {
    basename: "/",
    defaultPath: "/",
    env: {
        SERVER_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
};

export default nextConfig;
