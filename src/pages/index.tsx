import * as React from 'react'
import { graphql } from 'gatsby'
import { SimplePieChart } from '../components/circleGraph'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import { CustomArticleGrid } from '../components/ArticleGrid'

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

const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition={XPosition.Center}
      yPosition={YPosition.Center}
    />
    {CustomArticleGrid(data)}
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <SimplePieChart />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
