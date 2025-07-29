/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3912478627",
    "max": 0,
    "min": 0,
    "name": "Name_of_Respondent",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2591668434",
    "max": 0,
    "min": 0,
    "name": "Designation_of_respondent",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2100246317",
    "max": 0,
    "min": 0,
    "name": "Name_of_Organization_Agency",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

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

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date1132204812",
    "max": "",
    "min": "",
    "name": "Start_date_of_support",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date2007217646",
    "max": "",
    "min": "",
    "name": "End_date_of_support",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // remove field
  collection.fields.removeById("text3912478627")

  // remove field
  collection.fields.removeById("text2591668434")

  // remove field
  collection.fields.removeById("text2100246317")

  // remove field
  collection.fields.removeById("text3918554264")

  // remove field
  collection.fields.removeById("date1132204812")

  // remove field
  collection.fields.removeById("date2007217646")

  // remove field
  collection.fields.removeById("text1384238184")

  // remove field
  collection.fields.removeById("text1305116344")

  return app.save(collection)
})
