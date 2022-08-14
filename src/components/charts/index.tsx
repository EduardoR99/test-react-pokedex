import React from 'react'
import { Chart } from 'react-google-charts';

export const dataEspecies = [
  ['Species', 'Quantities '],
  ['Grass', 14],
  ['Poison', 33],
  ['Fire', 12],
  ['Water', 32],
  ['Flying', 19],
  ['Bug', 12],
  ['Normal', 22],
  ['Electric', 9],
  ['Ground', 14],
  ['Fairy', 5],
  ['Fight', 8],
  ['Psychic', 14],
  ['Ice', 5],
  ['Rock', 11]
]

export const dataTwoEspecies = [
  ['2 Especies Pokemons', 'Quantities'],
  ['Single Especies', 84],
  ['Two Especies', 67]
]

export function Charts() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', padding: '10px'}}>
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center',}}>
        <h3 style={{color: '#f00'}}>Pokemons Types</h3>
        <Chart
        chartType='PieChart'
        data={dataEspecies}
        width={'400px'}
        height={'400px'}
      />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center',}}>
        <h3 style={{color: '#f00'}}> 2 Types Pokemons</h3>
        <Chart
        chartType='PieChart'
        data={dataTwoEspecies}
        width={'400px'}
        height={'400px'}
      />
      </div>
      
    </div>
  )
}

export default Charts