module.exports = {
  siteMetadata: {
    title: `Gyudev`,
    description: `안녕하세요 새로운 걸 좋아하는 FE개발자 김민규입니다.`,
    author: `gyumong`,
    siteUrl: `https://www.gyumong.dev`,
    social: {
      github: `https://github.com/Gyumong`, // Your GitHub account
      tistory: `https://rlaalsrb3559.tistory.com/`, // Your Medium account
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    "gatsby-plugin-mdx",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.gyumong.dev",
        sitemap: "https://www.gyumong.dev/sitemap/sitemap-0.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + "/" + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + "/" + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                    }
                    slug
                  }
                }
              }
            }
            
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
      },
    },
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
