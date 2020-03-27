
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments()
    tbl.string('project_name')
        .notNullable()
    tbl.string('project_description')
    tbl.boolean('project_completed')
        .notNullable()
        .defaultTo(false)

  })
  .createTable('tasks', tbl => {
    tbl.increments()
    
    tbl.string('task')
        .notNullable()
    tbl.string('instructions')
    tbl.integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')
    tbl.boolean('completed')
        .notNullable()
        .defaultTo(false)

  })
  .createTable('resources', tbl => {
    tbl.increments()

    tbl.string('resource_name')
        .notNullable()
    tbl.string('description')

  })
  .createTable('project_resources', tbl => {

    tbl.integer('project_id')
        .notNullable()
        .references('id')
        .inTable('projects')
    tbl.integer('resource_id')
        .notNullable()
        .references('id')
        .inTable('resources')
    tbl.string('notes')
  })
};

exports.down = function(knex) {
    return (
        knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
    )
};
