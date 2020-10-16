import express from 'express';

import './database/connection'
import { getRepository } from 'typeorm'
import Orphanage from './models/Orphanage'

const app = express()

app.use(express.json())

app.post('/orphanages', (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = req.body;
  
  const orphanagesRepository = getRepository(Orphanage)

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  orphanagesRepository.save(orphanage)
})

app.listen(3333)