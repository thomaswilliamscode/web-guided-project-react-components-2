import React from 'react'
// 👉 1- We need the Pet component
import Pet from './Pet'

export default function PetsList(props) {
  const { Pets } = props

  return (
		<div className='list-pets-friends container'>
			{/* 2- Loop over the data generating a Pet element as you go */}
			{/* What props does the Pet component expect? */}
			{
        Pets.map((pet, idx) => {
          <Pet key={idx} pet={pet} />;
        })
      }
		</div>
	);
}
