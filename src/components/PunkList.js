import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

let PunkList = ({ punkListData, setSelectedPunk }) => {
    return (
        <div className="punkList">
            {console.log(punkListData)}
            {punkListData.map(punk => (
                <div onClick={
                    () => setSelectedPunk(punk.token_id)
                }>
                    <CollectionCard
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_original_url}
                    ></CollectionCard>
                </div>
            ))}
            
        </div>
    )
}

export default PunkList
