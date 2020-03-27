
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Computer Build', project_description: 'Building a new computer from scratch', project_completed: false},
        {id: 2, project_name: 'Go to the Gym', project_description: 'Want to stay in shape', project_completed: true},
        {id: 3, project_name: 'Survive COVID-19', project_description: 'survive the "pandemeic" that is going around', project_completed: false}
      ]);
    });
};
