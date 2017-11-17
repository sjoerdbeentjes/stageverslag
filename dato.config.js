module.exports = (dato, root) => {
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
}
