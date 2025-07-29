/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select543193434",
    "maxSelect": 8,
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2837437335")

  // update field
  collection.fields.addAt(11, new Field({
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

  return app.save(collection)
})
