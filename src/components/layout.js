import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import globalStyles from '../shared/css/globalStyles.js';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>

          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>

            <ListLink to="/about/">About</ListLink>

            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>

        {children}
      </div>
    )}
  />
);
