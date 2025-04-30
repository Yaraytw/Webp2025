// src/cgu_iconButton.jsx
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CGUIconButton = () => {
  const [clickCount, setClickCount] = useState({
    cart: 0,
    delete: 0,
    alarm: 0
  });

  const handleClick = (key) => {
    setClickCount((prev) => ({
      ...prev,
      [key]: prev[key] + 1
    }));
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '40px'
    }}>
      {/* 購物車按鈕 */}
      <div style={{ textAlign: 'center' }}>
        <IconButton color="primary" onClick={() => handleClick('cart')}>
          <AddShoppingCartIcon />
        </IconButton>
        {clickCount.cart > 0 && <div>被點了 {clickCount.cart} 次</div>}
      </div>

      {/* 刪除按鈕 */}
      <div style={{ textAlign: 'center' }}>
        <IconButton color="secondary" onClick={() => handleClick('delete')}>
          <DeleteIcon />
        </IconButton>
        {clickCount.delete > 0 && <div>被點了 {clickCount.delete} 次</div>}
      </div>

      {/* 鬧鐘按鈕 */}
      <div style={{ textAlign: 'center' }}>
        <IconButton color="primary" onClick={() => handleClick('alarm')}>
          <AlarmIcon />
        </IconButton>
        {clickCount.alarm > 0 && <div>被點了 {clickCount.alarm} 次</div>}
      </div>
    </div>
  );
};

export default CGUIconButton;
