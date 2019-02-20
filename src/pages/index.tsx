import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
<<<<<<< HEAD
import ImageCarousel from '../components/Carousel'
import Carousel from 'nuka-carousel';
=======
import { CustomArticleGrid } from '../components/ArticleGrid'
>>>>>>> 2b2fd8514bc229749b8477abdfd844f04f7d3d7e

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
    <ImageCarousel imageURLs={[
      'https://s3.amazonaws.com/images.seroundtable.com/google-submit-url-1516800645.jpg',
      'https://s3.amazonaws.com/images.seroundtable.com/google-submit-url-1516800645.jpg',
      'https://s3.amazonaws.com/images.seroundtable.com/google-submit-url-1516800645.jpg',
      ]}/>
    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition={XPosition.Center}
      yPosition={YPosition.Center}
    />
    {CustomArticleGrid(data)}
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
