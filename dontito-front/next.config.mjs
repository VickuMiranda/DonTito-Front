/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        bodySizeLimit: '10mb', // Aumenta el límite a 10 MB (ajústalo según lo que necesites)
      },
    },
  };
  
  export default nextConfig;
  