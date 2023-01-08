import './style.css'

export default function Tag({ tags }) {
  return (
    <div className='container_tag'>
      {tags.map((el, index) => (
        <div className='tag' key={index}>
          {el}
        </div>
      ))}
    </div>
  )
}
