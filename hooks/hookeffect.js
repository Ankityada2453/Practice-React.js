import React, { useEffect, usestate } from 'react'
function App() {
    const [count,setCount]=useState(0)
    useEffect(() => {
console.warn("useEffect")
    })
return (
    <div className="App">
        <h1>useEffect in React {count}</h1>
        <button onclick={()=>setCount(count+1)} >Update Counter</button>
    </div>
    );
}
export default App;