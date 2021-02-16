document.addEventListener('DOMContentLoaded', async function(event) {


  // Step 1: Make the world's tiniest to-do app
  let form = document.querySelector('form')
  form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log('todo submitted')

    let todoText = document.querySelector('#todo').value
    //console.log(todoText)

    if (todoText.length > 0){

      let todoList = document.querySelector('.todos')
      todoList.insertAdjacentHTML('beforeend', `<div class = "py-4 text-xl border-b-2 border-purple-500 w-full">
        ${todoText}
      </div>`
      )
      document.querySelector('#todo').value = ''
    }

  })

  // Step 2: Read existing to-dos from Firestore
  let querySnapshot = await db.collection('todos').get()
  console.log(querySnapshot.size)
  // Step 3: Add code to Step 1 to add todo to Firestore
  // Step 4: Add code to allow completing todos
})