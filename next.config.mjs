/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML/CSS/JS export — deployable on any host without Node.js.
  // Build with `npm run build`, then upload the contents of `out/` to public_html.
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
};
export default nextConfig;
