// src/cgu_multiButton.js
import Button from '@mui/material/Button';

const changeText = (event) => {
  event.target.innerText = event.target.innerText + " 被點了";
};

const MultiButton = (num) => {
  const output = [];
  for (let i = 1; i <= num; i++) {
    output.push(
      <Button
        key={i}
        variant="contained"
        color="primary"
        onClick={changeText}
        style={{ margin: '8px' }}
      >
        第{i}個按鍵
      </Button>
    );
  }
  return output;
};

export default MultiButton;
