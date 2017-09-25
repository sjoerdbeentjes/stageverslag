const marked = require('marked');
const tree = require('marked-token-tree');
const CircularJSON = require('circular-json');

module.exports = (dato, root) => {
  root.directory('data/current', dir => {
    dir.createDataFile('logs.json', 'json', mapCollection(dato.logs).reverse());
  })

  root.directory('data/current', dir => {
    dir.createDataFile('posts.json', 'json', mapCollection(dato.posts))
  })

  root.directory('data/current', dir => {
    dir.createDataFile('stageplan.json', 'json', convertBodyToHtml(getHeadings(dato.stageplan.toMap())));
  })

  function mapCollection(collection) {
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

  function getHeadings(item) {
    const fullTree = tree(item.body);
    let headings = [];

    fullTree.children.forEach(child => {
      headings.push({
        name: child.heading.text,
        link: child.heading.text.toLowerCase().replace(' ', '-')
      })
    })

    item.headings = CircularJSON.stringify(headings);
    return item;
  }
}
