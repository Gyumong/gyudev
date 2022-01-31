import React from 'react';
import Layout from '../layout';
import {Link,graphql} from 'gatsby'
const kebabCase = require(`lodash.kebabcase`)
const TagsPage = ({
    data: {
        allMdx: { group },
        site: {
          siteMetadata: { title },
        },
      },
      location,
}) =>{

    return (
        <Layout location={location} title={title}>
        <div>
          <h1>Tags</h1>
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    )
}

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
