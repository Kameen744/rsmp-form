/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // remove field
  collection.fields.removeById("text3918554264")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3918554264",
    "max": 0,
    "min": 0,
    "name": "Type_of_Organization_Agency",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
