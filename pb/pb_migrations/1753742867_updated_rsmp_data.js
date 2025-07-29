/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select3918554264",
    "maxSelect": 3,
    "name": "Type_of_Organization_Agency",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Donor",
      "Implementing Partner",
      "Government"
    ]
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1384238184",
    "maxSelect": 1,
    "name": "Status_of_support",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Not started",
      "In Progress",
      "Completed"
    ]
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select1305116344",
    "maxSelect": 3,
    "name": "Level_of_support",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "National",
      "State",
      "LGA"
    ]
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "select543193434",
    "maxSelect": 1,
    "name": "Campaign_Focus",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Measles Rubella",
      "Polio",
      "HPV",
      "NTDs",
      "Malaria",
      "Nutrition",
      "Routine Immunization",
      "Other"
    ]
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3357404788",
    "max": 0,
    "min": 0,
    "name": "Campaign_Focus_Other",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "json1687604676",
    "maxSize": 0,
    "name": "States_supported",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "json575464685",
    "maxSize": 0,
    "name": "LGA_supported",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "json655018803",
    "maxSize": 0,
    "name": "Type_of_Support",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "json2593830261",
    "maxSize": 0,
    "name": "Thematic_areas_supported",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // remove field
  collection.fields.removeById("select3918554264")

  // remove field
  collection.fields.removeById("select1384238184")

  // remove field
  collection.fields.removeById("select1305116344")

  // remove field
  collection.fields.removeById("select543193434")

  // remove field
  collection.fields.removeById("text3357404788")

  // remove field
  collection.fields.removeById("json1687604676")

  // remove field
  collection.fields.removeById("json575464685")

  // remove field
  collection.fields.removeById("json655018803")

  // remove field
  collection.fields.removeById("json2593830261")

  return app.save(collection)
})
