module.exports = {
  siteMetadata: {
    title: `Gyudev`,
    description: `안녕하세요 gyumong.dev 입니다.`,
    author: `gyumong`,
    siteUrl: `https://www.gyumong.dev/`,
    social: {
      github: `https://github.com/Gyumong`, // Your GitHub account
      tistory: `https://rlaalsrb3559.tistory.com/`, // Your Medium account
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
