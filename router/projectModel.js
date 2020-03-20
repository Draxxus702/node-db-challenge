const db = require('../data/config')

module.exports = {
    find,
    getResources,
    getTasks,
    insert,
    addResources,
    addTask,
    getTheRightTasks
}



function find(){
    return db('projects')
}


function insert(param) {
    return db("projects")
      .insert(param)
      .then(ids => ({ id: ids[0] }))
  }

function getResources() {
return db('resources')
}


function getTasks() {
return db('tasks')
}


function addTask(task) {
    return db("tasks")
    .insert(task)
    .then(ids => ({ id: ids[0] }))
}


function addResources(resource){
    return db("resources")
    .insert(resource)
    .then(ids => ({ id: ids[0] }))
  }


  function getTheRightTasks(id){
      return db('tasks')
    .join('tasks, projects.id, tasks.project_id ')
    .select('tasks.id', "projects.project_name", "projects.project_description")
    .where('tasks.project_id', id)
  }