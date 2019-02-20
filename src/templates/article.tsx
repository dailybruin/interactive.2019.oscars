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
import { CustomArticleGrid } from '../components/ArticleGrid'

export const query = graphql`
  query($name: String!) {
    kerckhoffArticle(title: { eq: $name }) {
      headline
      author
      content {
        type
        value
      }
    }
  }
`

export default ({ data }) => {
  return (
    <div>
      {console.log(data)}
      <Article dropcap={true} content={data.kerckhoffArticle.content} />
      <Footer developers="Nathan Smith" copyrightYear={2018} />
    </div>
  )
}
