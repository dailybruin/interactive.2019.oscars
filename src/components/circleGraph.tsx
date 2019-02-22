import React from 'react'
import { css } from 'react-emotion'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Pie } from 'react-chartjs-2'
import Clapper from '../images/clapper.svg'

const options = [
  'Best Picture',
  'Best Director',
  'Best Actress in a Leading Role',
  'Best Actor in a Leading Role',
  'Best Supporting Actress',
  'Best Supporting Actor',
  'Best Foreign Language Film',
  'Best Animated Film',
  'Best Original Song',
  'Best Original Screenplay',
  'Best Adapted Screenplay',
]
const data = {
  BestPicture: {
    labels: [
      'Black Panther',
      'BlackKkKlansman',
      'Bohemian Rhapsody',
      'The Favourite',
      'Green Book',
      'Roma',
      'A Star Is Born',
      'Vice',
    ],
    datasets: [
      {
        data: [22, 6, 11, 16, 8, 33, 7, 2],
        backgroundColor: [
          '#F4CD6A',
          '#F29A5A',
          '#E37373',
          '#DF79AA',
          '#B984C6',
          '#9594C4',
          '#7BB0D6',
          '#85C0C8',
        ],
      },
    ],
  },
  BestDirector: {
    labels: [
      '“BlacKkKlansman” Spike Lee',
      '“Cold War” Paweł Pawlikowski',
      '“The Favourite” Yorgos Lanthimos',
      '“Roma” Alfonso Cuarón',
      'Vice” Adam McKay',
    ],
    datasets: [
      {
        data: [20, 0, 11, 70, 4],
        backgroundColor: [
          '#E36A6A',
          '#F29071',
          '#FCAC63',
          '#F5D37C',
          '#F6F3A9',
        ],
      },
    ],
  },
  BestActressinaLeadingRole: {
    labels: [
      'Yalitza Aparicio in “Roma”',
      'Glenn Close in “The Wife”',
      'Olivia Colman in “The Favourite”',
      'Lady Gaga in “A Star Is Born”',
      'Melissa McCarthy in “Can You Ever Forgive Me?”',
    ],
    datasets: [
      {
        data: [18, 36, 21, 27, 2],
        backgroundColor: [
          '#BEB2DF',
          '#B886D7',
          '#E477B2',
          '#E588A4',
          '#F9A3A3',
        ],
      },
    ],
  },
  BestActorinaLeadingRole: {
    labels: [
      'Christian Bale in “Vice”',
      'Bradley Cooper in “A Star Is Born”',
      "Willem Dafoe in “At Eternity's Gate”",
      'Rami Malek in “Bohemian Rhapsody”',
      'Viggo Mortensen in “Green Book”',
    ],
    datasets: [
      {
        data: [26, 4, 5, 66, 4],
        backgroundColor: [
          '#C4DC9B',
          '#8FCF99',
          '#599471',
          '#34CA9D',
          '#8EE1CD',
        ],
      },
    ],
  },
  BestSupportingActress: {
    labels: [
      'Amy Adams in “Vice”',
      'Marina de Tavira in “Roma”',
      'Regina King in “If Beale Street Could Talk”',
      'Emma Stone in “The Favourite”',
      'Rachel Weisz in “The Favourite”',
    ],
    datasets: [
      {
        data: [12, 7, 57, 22, 6],
        backgroundColor: [
          '#FFDC99',
          '#EFB47C',
          '#FCF89E',
          '#D7C585',
          '#967C5D',
        ],
      },
    ],
  },
  BestSupportingActor: {
    labels: [
      'Mahershala Ali in “Green Book”',
      'Adam Driver in “BlacKkKlansman”',
      'Sam Elliott in “A Star Is Born”',
      'Richard E. Grant in “Can You Ever Forgive Me?”',
      'Sam Rockwell in “Vice”',
    ],
    datasets: [
      {
        data: [53, 19, 8, 7, 8],
        backgroundColor: [
          '#C4ECEC',
          '#88DAF4',
          '#51A6E3',
          '#6384D9',
          '#8591BC',
        ],
      },
    ],
  },
  BestForeignLanguageFilm: {
    labels: ['Capernaum', 'Cold War', 'Never Look Away', 'Roma', 'Shoplifters'],
    datasets: [
      {
        data: [1, 10, 0, 92, 2],
        backgroundColor: [
          '#D8C6C6',
          '#DB9999',
          '#F1BFBF',
          '#E04C4C',
          '#893636',
        ],
      },
    ],
  },
  BestAnimatedFilm: {
    labels: [
      'Incredibles 2',
      'Isle of Dogs',
      'Mirai',
      'Ralph Breaks the Internet',
      'Spider-Man: Intro the Spider-Verse',
    ],
    datasets: [
      {
        data: [14, 13, 0, 2, 76],
        backgroundColor: [
          '#B6DBC9',
          '#6E9C86',
          '#5CCB96',
          '#199B5C',
          '#2E6249',
        ],
      },
    ],
  },
  BestOriginalSong: {
    labels: [
      "“I'll Fight” from “RBG” - Music and Lyric by Diane Warren",
      '“The Place Where Lost Things Go” from “Mary Poppins Returns” - Music by Marc Shaiman; Lyric by Scott Wittman and Marc Shaiman',
      '“Shallow” from “A Star Is Born” - Music and Lyric by Lady Gaga, Mark Ronson, Anthony Rossomando and Andrew Wyatt',
      '“When A Cowboy Trades His Spurs For Wings” from “The Ballad of Buster Scruggs” - Music and Lyric by David Rawlings and Gillian Welch',
      '“All The Stars” from “Black Panther” - Music by Mark Spears, Kendrick Lamar Duckworth and Anthony Tiffith; Lyric by Kendrick Lamar Duckworth, Anthony Tiffith and Solana Rowe',
    ],
    datasets: [
      {
        data: [1, 4, 85, 1, 14],
        backgroundColor: [
          '#CCC5D4',
          '#A88BC5',
          '#9050D1',
          '#78519E',
          '#8B82A4',
        ],
      },
    ],
  },
  BestOriginalScreenplay: {
    labels: ['The Favourite', 'First Reformed', 'Green Book', 'Roma', 'Vice'],
    datasets: [
      {
        data: [41, 6, 29, 20, 9],
        backgroundColor: [
          '#8E9BBC',
          '#718ED9',
          '#3C6CE8',
          '#576382',
          '#142F76',
        ],
      },
    ],
  },
  BestAdaptedScreenplay: {
    labels: [
      '“The Ballad of Buster Scruggs”',
      '“BlacKkKlansman”',
      '“Can You Ever Forgive Me?”',
      '“If Beale Street Could Talk”',
      '“A Star Is Born”',
    ],
    datasets: [
      {
        data: [1, 37, 3, 31, 33],
        backgroundColor: [
          '#DFF5F9',
          '#70A4AF',
          '#31B6D4',
          '#97B4C8',
          '#5082A4',
        ],
      },
    ],
  },
}

export class SimplePieChart extends React.Component<{}, { selected: any }> {
  constructor(props) {
    super(props)
    this.state = {
      selected: { value: 'Best Picture', label: 'Best Picture' },
    }
    this._onSelect = this._onSelect.bind(this)
  }
  _onSelect(option) {
    console.log(option)
    this.setState({ selected: option })
  }

  render() {
    const defaultOption = this.state.selected
    const placeHolderValue =
      typeof this.state.selected === 'string'
        ? this.state.selected
        : this.state.selected.label.replace(/ /g, '')
    return (
      <div
        className={css`
          margin: 0 auto;
          max-width: 1103px;
          padding: 0px 1.0875rem 1.45rem;
          padding-top: 0px;
        `}
      >
        <h2
          className={css`
            color: #f4cd6a;
            font-family: Lato;
            font-style: normal;
            font-weight: 300;
            text-align: center;
            font-size: 5rem;
          `}
        >
          AND THE WINNER IS...
        </h2>
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            className={css`
              display: flex;
            `}
          >
            <p
              className={css`
                font-family: Open Sans;
                color: #f4cd6a;
              `}
            >
              Oscars Sunday will present stiff competition. We polled 100 Daily
              Bruin staffers, asking which nominees they think will go for gold.
              Do your predictions line up with ours?
            </p>
            <img
              src={Clapper}
              className={css`
                margin: 0;
                width: 8rem;
              `}
            />
          </div>
          <div
            className={css`
              width: 200px;
              align-self: center;
            `}
          >
            <Dropdown
              options={options}
              onChange={this._onSelect}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div>
          <div>
            <Pie
              data={data[placeHolderValue]}
              width={400}
              height={400}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}
