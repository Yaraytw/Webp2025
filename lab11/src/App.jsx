// src/App.jsx
const styleArgument = {
  color: 'blue',
  cursor: 'pointer',
  fontSize: '2rem'
};

const changeText = (event) => {
  event.target.innerText = event.target.innerText + " 被點了";
};

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <h1 style={styleArgument} onClick={changeText}>
        hello CGU!!
      </h1>
    </div>
  );
}

export default App;
