import * as React from 'react'
import Star from '../images/star.svg'
import { css } from 'react-emotion'
import { Link } from 'gatsby'

export default function CustomNavBar() {
  let Slink = props => {
    return (
      <Link
        to={`/#${props.linkedId.split(' ')[0]}`}
        className={css`
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          className={css`
            margin: 0;
          `}
          src={Star}
        />
        <span
          className={css`
            font-family: Open Sans;
            color: #fee9b5;
            margin-left: 5px;
            margin-right: 5px;
            font-size: 1.75rem;
          `}
        >
          {props.text}
        </span>
        <img
          className={css`
            margin: 0;
          `}
          src={Star}
        />
      </Link>
    )
  }

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 125px;
      `}
    >
      <div
        className={css`
          width: 90%;
          display: flex;
          justify-content: space-evenly;
          @media screen and (max-width: 950px) {
            flex-direction: column;
          }
        `}
      >
        <Slink text="Alumni at the Awards" linkedId="Red Carpet Reel" />
        <Slink text="Critic’s Choice" linkedId="Critic's Choice" />
        <Slink text="Related Coverage" linkedId="Related Coverage" />
      </div>
    </div>
  )
}
