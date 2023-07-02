/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `¶ Paragraph`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	pathPrefix: "/paragraph",
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Paragraph`,
				short_name: `Paragraph`,
				start_url: `/paragraph`,
				display: `standalone`,
				icon: "src/images/favicon.png",
			},
		},
	],
}
