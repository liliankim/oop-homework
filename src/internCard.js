function internCard (intern) {
    return `
    <div class="col-sm-4 mt-5">
          <div class="card" style="width: 18rem">
            <div class="card-body bg-primary">
              <h5 class="card-title text-white">${intern.name}</h5>
              <p class="card-text text-white">
                <i class="fa-solid fa-glasses"></i> Intern
              </p>
            </div>
            <div class="p-3 border">
              <ul class="list-group list-group-flush border">
                <li class="list-group-item">Id:${intern.id}</li>
                <li class="list-group-item">${intern.email}li></li>
                <li class="list-group-item">School: ${intern.school}</li>
              </ul>
            </div>
          </div>
        </div>
    `
}

module.exports = internCard