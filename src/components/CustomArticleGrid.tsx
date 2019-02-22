import * as React from 'react'
import { graphql } from 'gatsby'
import {
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
          headline
          byline
          imageurl
          imagecredits
          imagealt
          link
          description
        }
      }
    }
  }
`

export const CustomArticleGrid = (data, onlyRelated) => {
  const headingStyle = css`
    font-family: Lato;
    font-weight: 300;
    font-size: 96px;
    color: #f4cd6a;
    text-transform: uppercase;
  `
  const articleStyle = css`
    font-family: Lato;
    article {
      background-color: white;
      min-height: 400px;
      margin: 5px;
      p,
      div,
      h2 {
        margin: 15px;
        margin-top: 0px;
        letter-spacing: 0.01em;
      }
      h2 {
        margin-bottom: 0px;
      }
    }
  `
  let sections = extractSectionsFromArticleEdges(data.allGoogleSheetRow.edges)
  if (onlyRelated) sections = ['Related Coverage']
  else sections = ['Red Carpet Reel', "Critic's Choice"]

  const articleGrids = sections.map((section, i) => {
    const articles = convertEdgesToArticles(
      data.allGoogleSheetRow.edges
    ).filter(article => article.section === section.toLowerCase())
    return (
      <>
        <div
          id={`${section.split(' ')[0]}`}
          className={css`
            height: 1px;
          `}
        />
        <ArticleGrid
          headingStyle={headingStyle}
          key={i}
          heading={section}
          articles={articles}
          maxColumns={2}
          style={articleStyle}
        />
      </>
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
