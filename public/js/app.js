
const url = 'https://reqres.in/api/users?page=2'
fetch(url).then((response) => {
  console.log(response)
}).catch((error) => {
    console.log(error)
})