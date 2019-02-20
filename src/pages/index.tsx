import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'react-emotion'
import Star from '../images/star.png'
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

const NavBar = styled('div')`
  display: flex;
  flex-direction: row;
  color: #FEE9B5;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 890px) { flex-direction: column; }
`

const NavItem = styled('div')`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 36px;
  margin-bottom: 0;
`

const StarDiv = () => <img src={Star} style={{marginBottom: 0}}/>


const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <NavBar>
      <NavItem><StarDiv/> Features <StarDiv/></NavItem>
      <NavItem><StarDiv/> Predictions <StarDiv/></NavItem>
      <NavItem><StarDiv/> Related Coverage <StarDiv/></NavItem>
    </NavBar>
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
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
