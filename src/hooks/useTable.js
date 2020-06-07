import { useState, useEffect } from 'react'
import cards from '../helpers/cards'

//TODO: Define cells schema

const defaultCell = {
  pair: '',
  actions: [
    {
      color: 'lightgray',
      chance: 70,
    },
    {
      color: 'pink',
      chance: 30,
    },
  ],
}

export default function useTable() {
  const [rows] = useState(() => {
    return cards.map((card, _, array) => {
      const table = []
      array.forEach((currentCard) =>
        table.push({ ...defaultCell, pair: card + currentCard })
      )
      return table
    })
  })

  useEffect(() => {
    //fetch api
  }, [])

  return rows
}