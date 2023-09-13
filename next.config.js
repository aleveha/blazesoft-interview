/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		serverActions: true,
	},
	output: "standalone",
};
