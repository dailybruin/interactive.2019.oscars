import * as React from 'react'
import { graphql } from 'gatsby'
import { SimplePieChart } from '../components/circleGraph'
import { Footer, Head, XPosition, YPosition } from '@dailybruin/lux'
import { css } from 'react-emotion'
import { CustomArticleGrid } from '../components/ArticleGrid'
import CustomCover from '../components/CustomCover'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
        image
      }
    }
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
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
          imagedescription
          link
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <div
    className={css`
      background-color: #1e1b18;
    `}
  >
    {console.log(data)}
    <Head {...data.site.siteMetadata} />
    <CustomCover
      headline="SILVER SCREEN WONDERS"
      authors={data.kerckhoffArticle.author}
      imageURL="https://assets.dailybruin.com/images/interactive.2019.oscars/coverphoto-9dfc29c0f3a4defc19dbf58c5ba2b6a6.png"
      xPosition={XPosition.Center}
      yPosition={YPosition.Top}
    />
    {CustomArticleGrid(data)}
    <SimplePieChart />
    <Footer
      developers={[
        'Richard Yang',
        'Mindi Cao',
        'Karl Huang',
        'Max Wu',
        'Felix Zhang',
      ]}
      copyrightYear={2019}
    />
  </div>
)

export default IndexPage
