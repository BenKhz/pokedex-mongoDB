const pokeDb = require('./index');

module.exports = {
  save: (toBeSavedObj, cb) => {
    var currentSave = new pokeDb(toBeSavedObj)
    return currentSave.save()
  },
  getAll: () => {
    return pokeDb.find({})
  }
}