import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import Masonry from 'react-masonry-css';

class ProjectsTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const breakpointColumnsObj = {
      default: 2,
      700: 1
    };

    return (
        <div className="grid">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                    {posts &&
                      posts.map(({ node: post }) => (
                        <div key={post.id} className='card'>
                          <Link
                            to={post.fields.slug}
                          >
                    {post.frontmatter.featuredimage ? (
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`
                            }}
                          />
                          ) : null}
                        <p>
                            {post.frontmatter.title}
                        </p>
                      </Link>
                    </div>
                  ))}
                </Masonry>
        </div>
    )
  }
}

ProjectsTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function Projects() {
  return (
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "project-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 500
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ProjectsTemplate data={data} count={count} />}
    />
  );
}
