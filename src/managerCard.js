function managerCard (manager) {
    return `
    <div class="col-sm-4 mt-5">
    <div class="card" style="width: 18rem">
      <div class="card-body bg-primary">
        <h5 class="card-title text-white">${manager.name}</h5>
        <p class="card-text text-white">
          <i class="fa-solid fa-mug-hot"></i> Manager
        </p>
      </div>
      <div class="p-3 border">
        <ul class="list-group list-group-flush border">
          <li class="list-group-item">ID:${manager.id}</li>
          <li class="list-group-item">Email: ${manager.email}</li>
          <li class="list-group-item">${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>
    `
}

module.exports = managerCard