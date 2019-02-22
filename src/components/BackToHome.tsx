import * as React from 'react'
import { css } from 'react-emotion'
import { Footer } from '@dailybruin/lux'
import Arrow from '../images/arrow.svg'
import { Link } from 'gatsby'

export const BackToHome = () => {
  return (
    <div
      className={css`
        width: 100vw;
        height: 100px;
        background-color: #1e1b18;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fee9b5;
      `}
    >
      <span />
      <span
        className={css`
          margin-left: 85px;
        `}
      >
        <Footer
          developers={[
            'Richard Yang',
            'Mindi Cao',
            'Karl Huang',
            'Max Wu',
            'Felix Zhang',
            'Maggie Ching',
          ]}
          copyrightYear={2019}
        />
      </span>
      <Link
        to="/"
        className={css`
          text-decoration: none;
          color: #fee9b5;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.9rem;
        `}
      >
        <img
          src={Arrow}
          className={css`
            margin: 0;
            margin-right: 5px;
          `}
          alt="arrow"
          width="15"
          height="15"
        />
        return to home
      </Link>
    </div>
  )
}
