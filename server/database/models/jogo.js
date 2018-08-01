const shortId = require('shortid')

module.exports = (bookshelf) => {
    return bookshelf.Model.extend({
      tableName: 'jogo',
      hidden: ['id'],
      constructor: function () {
        bookshelf.Model.apply(this, arguments)
        this.on('saving', function (model, attrs, options) {
          if (!model.isNew()) {
            return
          }
          model.set('sid', shortId.generate())
        })
      }
  })
}