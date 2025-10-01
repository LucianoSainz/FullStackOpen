const App = () => {
  const friends = [
    {name: 'Peter', age:10},
    {name: 'Maya', age: 35},
  ]
  return (
    <div>
      <p>{friends[0].name} {friends[1].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}


export default App
