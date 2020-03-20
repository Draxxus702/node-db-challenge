
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {project_id: 1, resource_id:1, notes:'The only way to go really'},
        {project_id: 2, resource_id:2, notes:'been doing this a while'},
        {project_id: 3, resource_id:3, notes:'OMG EVERYONE IS GOING TO DIE BUT MEEEE'}
      ]);
    });
};
