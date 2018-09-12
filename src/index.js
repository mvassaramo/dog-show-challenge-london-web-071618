document.addEventListener('DOMContentLoaded', () => {


  function getData() {
    return fetch('http://localhost:3000/dogs')
    .then(resp => resp.json())
    .then(dogs => dogs.forEach(dog => appendDog(dog)))
  }

  getData()

  function appendDog(dog){

    const tableBodyEl = document.querySelector('#table-body')
    const tableRowEl = tableBodyEl.insertRow(0)
      tableRowEl.innerHTML = `
      <tr><td>${dog.name}</td>
      <td>${dog.breed}</td>
      <td>${dog.sex}</td>
      <td><button>Edit</button></td></tr>
      `
    tableBodyEl.append(tableRowEl)

    const editButton = document.querySelector('button')


    editButton.addEventListener('click', (event) => {
      console.log('works!')
    })


  }






})
