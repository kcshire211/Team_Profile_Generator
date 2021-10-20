

function generateHTMLString(teamMembers) {
    let allCards = ""
    
    for(let i=0; i<teamMembers.length; i++) {
        let teamMember=teamMembers[i]
        let thirdPTag = ""
        if(teamMember.getRole() === "Manager") {
            thirdPTag = `<p class="card-text">${teamMember.getOfficeNumber()}</p>`
        } else if(teamMember.getRole()=== "Engineer") {
            thirdPTag = `<p class="card-text">${teamMember.getGithub()}</p>`
        } else {
            thirdPTag = `<p class="card-text">${teamMember.getSchool()}</p>`
        }
        
        let positionCard = `<div class="card" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${teamMember.getName()}</h5>
          <h5 class="card-title">${teamMember.getRole()}</h5>
          <p class="card-text">${teamMember.getId()}</p>
          <p class="card-text">${teamMember.getEmail()}</p>
            ${thirdPTag}
        </div>
      </div>`
      allCards=allCards+positionCard
    }
    const mainHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Members</title>
</head>
<body>
    
  <h1>This is where the data gets displayed</h1>
    ${allCards}

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>`
return mainHtml;
}

module.exports = generateHTMLString;