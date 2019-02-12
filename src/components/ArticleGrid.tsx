import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Footer,
  Head,
  Headline,
  ArticleGrid,
  convertEdgesToArticles,
  extractSectionsFromArticleEdges,
} from '@dailybruin/lux'
import { css } from 'react-emotion'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    allGoogleSheetRow {
      edges {
        node {
          section
          iscolumn
          headline
          byline
          imageurl
          imagecredits
          imagedescription
          link
        }
      }
    }
  }
`

export const CustomArticleGrid = data => {
  const headingStyle = css`
    font-family: Lato;
    font-weight: 300;
    font-size: 96px;
    color: #f4cd6a;
    text-transform: uppercase;
  `
  const articleStyle = css`
    font-family: Lato;
    h2 {
      font-family: Merriweather;
    }
    article {
      height: 609px;
    }
  `
  const sections = extractSectionsFromArticleEdges(data.allGoogleSheetRow.edges)

  const articleGrids = sections.map((section, i) => {
    const articles = convertEdgesToArticles(
      data.allGoogleSheetRow.edges
    ).filter(article => article.section === section.toLowerCase())
    return (
      <ArticleGrid
        headingStyle={headingStyle}
        key={i}
        heading={section}
        articles={articles}
        maxColumns={2}
        style={articleStyle}
      />
    )
  })

  return (
    <>
      <div
        className={css`
          margin: 0 auto;
          max-width: 1103px;
          padding: 0px 1.0875rem 1.45rem;
          padding-top: 0px;
        `}
      >
        {articleGrids}
      </div>
    </>
  )
}
