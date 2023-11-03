import * as React from 'react';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ResetButton({setTargetWord}) {

  const [newWord, setNewWord] = useState('')

  useEffect(() => {
    fetch('https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase')
      .then(response => response.json())
      .then(json => setNewWord(json))
      .catch(error => console.error(error));
  }, [newWord]);

  const onClick = (button) => {
    console.log('reset button pressed', button)
    setTargetWord(newWord)
  }

  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClick} variant="contained" fullWidth>Reset</Button>
    </Stack>
  );
}