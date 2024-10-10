// import 'bootstrap/dist/css/bootstrap.min.css'

const Button = props => {
  //  Write your code here.
  const {name, classBtn} = props
  return <button className={`${classBtn}`}>{name}</button>
}

const element = (
  //  Write your code here.
  <div>
    <h1 className='heading'>Social Buttons</h1>
    <div>
      <Button name='Like' classBtn='button like' />
      <Button name='Comment' classBtn='button comment ms-5' />
      <Button name='Share' classBtn='button share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
