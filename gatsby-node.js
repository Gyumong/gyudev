const path = require("path")

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`GyuDev site has been built!`)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/index.js`)
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
  `).then(result => {
    if (result.error) {
      return Promise.reject(result.error)
    }

    result.data.allMdx.nodes.forEach(({ node }) => {
      createPage({
        path: node.slug,
        compoent: blogPostTemplate,
        context: {},
      })
    })
  })
}
