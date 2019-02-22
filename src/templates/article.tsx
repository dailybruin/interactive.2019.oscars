import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, Footer, Headline, Byline } from '@dailybruin/lux'
import { css } from 'react-emotion'
import { BackToHome } from '../components/BackToHome'

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
    <div
      className={css`
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className={css`
          max-width: 700px;
          margin: 25px;
        `}
      >
        <Headline text={data.kerckhoffArticle.headline} />
        <Byline authors={data.kerckhoffArticle.author} />
        <Article dropcap={true} content={data.kerckhoffArticle.content} />
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
      <BackToHome />
    </div>
  )
}
