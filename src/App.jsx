import './App.css'
import Button from "./components/Button.jsx";


function App() {
  return ( <>
      <h1>Handbags & Purses</h1>

        <nav>
            <Button text="to the collection"
                    disabled={false}/>
            <Button text="shop all bags"
                    disabled={false}/>
            <Button text="pre-orders"
                    disabled={true}/>
        </nav>

          <main>
              <article>
                  <span>red lable </span>
                  <img src="image" alt="description" />
                  <p>Title</p>
                  <h4>Price</h4>
              </article>


          </main>


      </>
  )
}

export default App
