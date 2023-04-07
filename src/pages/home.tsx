const Home = () => {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <button className='bg-blue-500 px-4 py-2' onClick={() => {
          import('../utils/sample_util').then(module => {
            alert(module.add(1, 4))
          })
        }}>Add 1 + 4</button>
        <button className='bg-blue-500 px-4 py-2' onClick={() => {
          import('../utils/sample_util').then(module => {
            alert(module.subtract(5, 1))
          })
        }}>Subtract 5 - 1</button>
      </div>
    </div>
  )
}

export default Home
