/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // remove field
  collection.fields.removeById("text1384238184")

  // remove field
  collection.fields.removeById("text1305116344")

  // add field
  collection.fields.addAt(7, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1094256023",
    "maxSize": 0,
    "name": "Key_Performance_Indicators",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select2823809205",
    "maxSelect": 1,
    "name": "Are_you_collaborating_with_any_other_partners",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Yes",
      "No"
    ]
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select189952432",
    "maxSelect": 16,
    "name": "List_the_Partners",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "WHO",
      "UNICEF",
      "USCDC",
      "AFFENET",
      "Red Cross",
      "IVAC",
      "C-WINS",
      "e-Health Africa",
      "SCIDAR",
      "GRID3",
      "CHAI",
      "McKinsey",
      "McKing",
      "Acasus",
      "Sydani Group",
      "Others"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1384238184",
    "max": 0,
    "min": 0,
    "name": "Status_of_support",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1305116344",
    "max": 0,
    "min": 0,
    "name": "Level_of_support",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("editor1094256023")

  // remove field
  collection.fields.removeById("select2823809205")

  // remove field
  collection.fields.removeById("select189952432")

  return app.save(collection)
})
