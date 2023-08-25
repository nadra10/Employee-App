import './header.css'

export default function Header({title}) {
  return (
    <div className='header'>
        <h3>{title}</h3>
    </div>
  )
}