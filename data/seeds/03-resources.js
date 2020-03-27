
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'NewEgg', Description:'computer site'},
        {id: 2, resource_name: 'Room mate', Description:'gym buddy'},
        {id: 3, resource_name: 'Computer', Description:'keeps me away'}
      ]);
    });
};
