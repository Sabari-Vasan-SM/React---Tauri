
import { useEffect } from 'react'

function App() {
  // useEffect hook to handle the redirect
  useEffect(() => {
    window.location.href = "https://portfolio.vasan.tech";
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  // You can return a simple message while the redirect is happening
  return (
    <div>
      <p>Redirecting to Vasan's portfolio...</p>
    </div>
  );
}

export default App