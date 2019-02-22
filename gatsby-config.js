const slugify = require('slugify')

const siteName = 'Silver Screen Wonders: The 91st Academy Awards'
const description =
  "This year's Oscars ceremony marks an important day in the life of Bruins who worked on nominated films. From prolific production to iconic costumes, find out more about how our alumni fit into the star studded event"
const image =
  'https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg'
const year = '2019'

const url = `https://features.dailybruin.com/${year}/${slugify(siteName)}`

module.exports = {
  siteMetadata: {
    siteName,
    description,
    url,
    image,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteName,
        short_name: siteName,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'browser',
        icon: 'src/images/db-logo.png',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'interactive.2019.oscars',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-28181852-23',
        head: false,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-source-published-google-sheets',
      options: {
        sheetID: '1RggETqX3IcwXHv0nAw7GgaZ6JI6c9btc-Vo5k8l-WFQ',
      },
    },
  ],
}
