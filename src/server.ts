import express from 'express';

import './database/connection';

const app = express()

app.use(express.json())

app.get('/users', (req, res) => {
  return res.json({
    'name': 'William',
    'age': 32,
    'sex': 'M'
  })
})

app.listen(3333)