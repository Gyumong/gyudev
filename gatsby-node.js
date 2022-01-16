const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/layout/blog-page-layout.jsx`)

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
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  const posts = result.data.allMdx.nodes

  posts.map(i => console.log("gd"))
  posts.forEach(node => {
    const item = JSON.parse(JSON.stringify(node))
    createPage({
      path: `/blog/${item.slug}`,
      component: blogPostTemplate,
      context: {
        id: item.id,
      },
    })
  })
}
