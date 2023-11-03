import * as React from 'react';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ResetButton({setTargetWord}) {

  useEffect(() => {
    fetch('https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase')
      .then(response => response.json())
      .then(json => setTargetWord(json))
      .catch(error => console.error(error));
  }, []);

  const onClick = (button) => {
    console.log('reset button pressed', button)
    
  }

  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClick} variant="contained" fullWidth>Reset</Button>
    </Stack>
  );
}