// src/App.jsx
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function App() {
  const [clicked, setClicked] = useState({
    cart: 0,
    delete: 0,
    alarm: 0
  });

  const handleClick = (key) => {
    setClicked((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>
        <h1 style={{
          fontSize: '100px',
          color: 'red',
          margin: 0,
          textAlign: 'center'
        }}>
          hello CGU!!
        </h1>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <IconButton color="primary" onClick={() => handleClick('cart')}>
              <AddShoppingCartIcon />
            </IconButton>
            {clicked.cart > 0 && <div>被點了 {clicked.cart} 次</div>}
          </div>

          <div style={{ textAlign: 'center' }}>
            <IconButton color="secondary" onClick={() => handleClick('delete')}>
              <DeleteIcon />
            </IconButton>
            {clicked.delete > 0 && <div>被點了 {clicked.delete} 次</div>}
          </div>

          <div style={{ textAlign: 'center' }}>
            <IconButton color="primary" onClick={() => handleClick('alarm')}>
              <AlarmIcon />
            </IconButton>
            {clicked.alarm > 0 && <div>被點了 {clicked.alarm} 次</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
