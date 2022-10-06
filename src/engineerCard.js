function engineerCard (engineer) {
    return `
    <div class="col-sm-4 mt-5">
          <div class="card" style="width: 18rem">
            <div class="card-body bg-primary">
              <h5 class="card-title text-white">${engineer.name}</h5>
              <p class="card-text text-white">
                <i class="fa-solid fa-glasses"> </i>Engineer
              </p>
            </div>
            <div class="p-3 border">
              <ul class="list-group list-group-flush border">
                <li class="list-group-item">ID:${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">Github:${engineer.github}</li>
              </ul>
            </div>
          </div>
        </div>
    `
}

module.exports = engineerCard