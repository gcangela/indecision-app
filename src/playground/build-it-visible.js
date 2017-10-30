
let visibility = false 

const toggleVisibility = () => {
  visibility = !visibility
  renderCounterApp()
}

const renderCounterApp = () => {
  const template = (
    <div>
      <h1> Visibility Toggle</h1> 
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details': 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey look at this shit</p>
        </div> 
      )}
    </div>
  )
  ReactDOM.render(template, document.getElementById('app'))
}

renderCounterApp()