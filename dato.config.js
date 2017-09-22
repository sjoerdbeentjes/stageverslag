const marked = require('marked');

module.exports = (dato, root) => {
  root.directory('data/current', dir => {
    dir.createDataFile('logs.json', 'json', mapCollection(dato.logs));
  })

  root.directory('data/current', dir => {
    dir.createDataFile('posts.json', 'json', mapCollection(dato.posts))
  })

  root.directory('data/current', dir => {
    dir.createDataFile('stageplan.json', 'json', convertBodyToHtml(dato.stageplan.toMap()));
  })

  function mapCollection (collection) {
    return collection.reduce((acc, item) => {
      const mappedData = convertBodyToHtml(item.toMap());
      acc.push(mappedData)
      return acc
    }, [])
  }

  function convertBodyToHtml(item) {
    item.body = marked(item.body);
    return item;
  }
}
