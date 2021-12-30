module.exports = {
  siteMetadata: {
    title: `Gyudev`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    social: {
      github: `https://github.com/Gyumong`, // Your GitHub account
      tistory: `https://rlaalsrb3559.tistory.com/`, // Your Medium account
      facebook: `hayoung28/`, // Your Facebook account
      linkedin: `ha-young-choi-1ba15b1b7`, // Your LinkedIn account
      instagram: `niceha0`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-autolink-headers`,
    {
      resolve: `gatsby-plugin-emotion`,
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: `[local]`,
      cssPropOptimization: true,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
