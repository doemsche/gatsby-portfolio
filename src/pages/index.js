import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { css } from 'react-emotion';
import mq from '../shared/css/mediaqueries';

import img from './001.png';

const teaser = css({
  padding: '3px 5px',
  backgroundColor: '#fafafa',
  borderRadius: 2
});

const debugWt = { height: 200, backgroundColor: '#fafafa' };

const workteaser = css({
  ...debugWt,
  position: 'relative',
  display: 'block',
  float: 'left',
  width: 300,
  display: 'block',
  margin: '5px',
  '&:hover': {
    backgroundColor: '#bfde63',
    textDecoration: 'none !important',
    span: {
      opacity: 1
    },
    h3: {
      opacity: 1
    }
  },
  span: {
    opacity: 0,
    h3: {
      color: '#f4f4f4',
      textDecoration: 'none',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontFamily: 'Museo-Normal',
      textShadow: '0 -1px 1px rgba(153, 204, 0, 0.62)',
      top: 80,
      position: 'relative',
      borderTop: '1px solid #f4f4f4',
      borderBottom: '1px solid #f4f4f4',
      padding: '11px 0',
      opacity: 0
    }
  }
});

const anim = css({
  transition: 'all 0.3s'
});

const gridContainer = css({
  margin: '0 auto',
  [mq[0]]: {
    width: 320
  },
  [mq[1]]: {
    width: 640
  }
});

export default ({ data }) => {
  return (
    <Layout>
      <h1>Hello Universe! This is a call!</h1>
      <p className={teaser}>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <div className={gridContainer}>
        {data.allMarkdownRemark.edges.map(p => {
          const { excerpt, fields, id } = p.node;
          const { title } = p.node.frontmatter;
          return (
            <Link className={workteaser} to={fields.slug} key={id}>
              <span className={anim}>
                <h3>{title}</h3>
              </span>
            </Link>
          );
        })}
      </div>
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
            subtitle
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
