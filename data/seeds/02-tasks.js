
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task: 'Buy new computer parts', instructions: 'go to newEgg', project_id: 1, completed: false},
        {id: 2, task: 'stay motivated', instructions: 'keep going dont stop', project_id: 2, completed: true},
        {id: 3, task: 'Stay away from people', instructions: 'just keep livin life the way you have been', project_id: 3, completed: false},
        {id: 4, task: 'make money', instructions: 'keep on grindin', project_id: 1, completed: false}
      ]);
    });
};
