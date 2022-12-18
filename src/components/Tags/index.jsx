import './style.css'

function Tag({ tags }) {
  return (
    <div className='container_tag'>
      {tags.map((el) => (
        <div className='tag'>{el}</div>
      ))}
    </div>
  )
}

export default Tag
