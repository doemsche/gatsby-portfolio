import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { css } from 'react-emotion';

export default ({ data }) => {
  return (
    <Layout>
      <h1>Hello Universe! This is a call!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      {data.allMarkdownRemark.edges.map(p => {
        const { excerpt, fields, id } = p.node;
        const { title } = p.node.frontmatter;
        return (
          <div key={fields.slug} style={{ marginBottom: '30px' }}>
            <Link to={fields.slug} key={id}>
              <div>{title}</div>
            </Link>
            <span>{excerpt}</span>
          </div>
        );
      })}
    </Layout>
  );
};
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
