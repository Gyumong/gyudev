const path = require("path")
const kebabCase = require(`lodash.kebabcase`)

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
            tags
          }
          id
          slug
        }
      }
    }
  `)

  let tags = new Set()

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  const posts = result?.data?.allMdx?.nodes
  if (posts?.length > 0) {
    posts.forEach(node => {
      const item = JSON.parse(JSON.stringify(node))
      if (item.frontmatter.tags) {
        item.frontmatter.tags.forEach(tag => tags.add(tag))
      }
      console.log(item)
      createPage({
        path: `/blog/${item.slug}`,
        component: blogPostTemplate,
        context: {
          id: item.id,
        },
      })
    })

    // if (posts?.frontmatter?.tags) {
    //   posts?.frontmatter?.tags?.forEach(tag => tags.add(tag))
    // }

    const tagTemplate = path.resolve("./src/layout/tag-page-layout.jsx")

    tags?.forEach(tag => {
      createPage({
        path: `/tags/${kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  }
}
