const pokeDb = require('./index');

module.exports = {
  save: (toBeSavedObj, cb) => {
    var currentSave = new pokeDb({name: "testname", type: "testtype", img:"testimg"})
    return currentSave.save()
  },
  getAll: () => {
    return pokeDb.find({})
  }
}