/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `¶ Paragraph`,
		siteUrl: `https://cutwell.github.io/`,
	},
	pathPrefix: "/paragraph",
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Paragraph`,
				short_name: `Paragraph`,
				icon: "src/images/favicon.png",
			},
		},
	],
	flags: {
		DEV_SSR: true,
	},
}
