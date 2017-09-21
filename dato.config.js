const marked = require('marked');

module.exports = (dato, root) => {
  root.directory('data/current', dir => {
    dir.createDataFile('logs.json', 'json', convertBodyToHtml(mapCollection(dato.logs)));
  })

  root.directory('data/current', dir => {
    dir.createDataFile('posts.json', 'json', mapCollection(dato.posts))
  })

  function mapCollection (collection) {
    return collection.reduce((acc, item) => {
      const mappedData = item.toMap()
      acc.push(mappedData)
      return acc
    }, [])
  }

  function convertBodyToHtml(collection) {
    return collection.map(item => {
      item.body = marked(item.body);
      return item;
    })
  }
}
