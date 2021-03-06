import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import { FormattedMessage } from 'react-intl'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div style={{ display: `flex`, marginBottom: rhythm(2.5) }}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <p>
              <FormattedMessage
                id="about.me"
                defaultMessage="Personal blog by
              {author}
              who is technology enthusiast, lives in Brno and works primary in
              React {emoji}."
                values={{
                  author: (
                    <a
                      href={`https://www.linkedin.com/in/${social.linkedIn}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {author}
                    </a>
                  ),
                  emoji: '🍻',
                }}
              />
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-boksa.jpeg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          linkedIn
        }
      }
    }
  }
`

export default Bio
