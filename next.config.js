const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  experimental: {
    mdxRs: true,
  },
    images : {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'quantumone.b-cdn.net',
        port: '',
        pathname: '/onyx/**',
      },
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'youtube.com',
        port: '',
        pathname: '/embed/HR6a2aHhY_c?si=L2O3Cf7pQ-0HHhsP',
      },

      {
        protocol: 'https',
        hostname: 'quantumone.b-cdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },

   pageExtensions: ['ts', 'tsx', 'mdx', 'js', 'jsx'],
}

module.exports = withMDX(nextConfig)
