const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const articleNames = [
    'vice.aml',
    'sketchtoscreen.aml',
    'period.aml',
    'oscarpredictions.aml',
    'infinitywar.aml',
    'femaledirectors.aml',
    'ericroth.aml',
    'blackkklansman.aml',
    'bealestreet.aml',
  ]
  articleNames.forEach(name => {
    return graphql(`
      {
        kerckhoffArticle(title: { eq: "${name}" }) {
          headline
          author
          content {
            type
            value
          }
        }
      }
    `).then(result => {
      const ka = result.data.kerckhoffArticle
      createPage({
        path: name.split('.')[0],
        component: path.resolve(`./src/templates/article.tsx`),
        context: { name: name },
      })
    })
  })
}
