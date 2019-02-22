import * as React from 'react'
import { css } from 'react-emotion'
import Line from './Line'
import Oscar from '../images/coverphoto.png'

export enum XPosition {
  Left = 'start',
  Center = 'center',
  Right = 'end',
}

export enum YPosition {
  Top = 'start',
  Center = 'center',
  Bottom = 'end',
}

interface CoverPhotoProps {
  headline: string
  imageURL: string
  authors: string[]
  xPosition: XPosition
  yPosition: YPosition
  darken?: number
  style?: string
  explainer?: string
  textColor: string
}

export default class CustomCover extends React.Component<CoverPhotoProps> {
  public static defaultProps = {
    darken: 0,
    textColor: '#fff',
    xPosition: 'center',
    yPosition: 'center',
  }

  public render() {
    const textAlign =
      this.props.xPosition === XPosition.Center
        ? 'center'
        : this.props.xPosition === XPosition.Left
        ? 'left'
        : 'right'

    return (
      <div
        className={css`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
          rgba(0, 0, 0, ${this.props.darken}),
          rgba(0, 0, 0, ${this.props.darken})
        ), url("${this.props.imageURL}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        color: ${this.props.textColor};
        align-items: ${this.props.yPosition};
        justify-content: ${this.props.xPosition};
        margin-bottom: 46px;
        ${this.props.style}
      `}
      >
        <div
          className={css`
            width: 100vw;
            margin: 2rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            margin-top: 450px;
            align-items: ${this.props.xPosition === 'center'
              ? this.props.xPosition
              : 'flex-' + this.props.xPosition};
            @media screen and (max-width: 500px) {
              margin-top: 80%;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              align-items: center;
              width: 80%;
              top: 200px;
            `}
          >
            <Line color="#C88D48" />
            <h1
              className={css`
                margin: 0 0 0;
                font-size: 3rem;
                color: #f4cd6a;
                font-family: Lato;
                font-style: normal;
                font-weight: bold;
                line-height: normal;
                min-width: 60%;
                @media screen and (max-width: 800px) {
                  font-size: 30px;
                }
              `}
            >
              {this.props.headline}
            </h1>
            <Line color="#C88D48" />
          </div>
          <p
            className={css`
              font-family: Lato;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
              font-size: 1.5rem;
              text-align: center;
              letter-spacing: 0.1em;
              color: #f4cd6a;
              @media screen and (max-width: 800px) {
                font-size: 20px;
              }
            `}
          >
            THE 91ST ACADEMY AWARDS
          </p>
          {
            <p
              className={css`
                font-family: Open Sans;
                color: #f4cd6a;
                font-size: 1.2rem;
                max-width: 1000px;
                margin-left: 20px;
                margin-right: 20px;
                @media screen and (max-width: 800px) {
                  font-size: 16px;
                }
              `}
            >
              This year's Oscars ceremony marks an important day in the life of
              Bruins who worked on nominated films. From prolific production to
              iconic costumes, find out more about how our alumni fit into the
              star studded event.
            </p>
          }
        </div>
      </div>
    )
  }
}
