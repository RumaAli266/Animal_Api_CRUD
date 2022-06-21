import React, { useEffect, useState } from "react";
import '../App.css';
import { getAnimal, deleteAnimal } from './animals.service'
import CreateNewAnimal from "./CreateNewAnimal";
import AnimalCard from "./AnimalCard";

const AnimalCards = () => {
    const [animal, setAnimal] = useState([0]);
    const [ModelAnimal, setModel] = useState(false);
    const [ModelContent, setModelContent ] = useState("Form");
    const [selectedId, setSelectedId] = useState('');

    const getAnimalList = async () => {
      const data =  await getAnimal();
      const animalList = data.data.list;
      setAnimal(animalList);
   }
    
    useEffect(()=>{
      getAnimalList();
    },[])
 
    const handleDelete = async (id) =>{
        await deleteAnimal({id: id});
        getAnimalList()
    }

    const creatCard = ()=>{
      setModel(true)
      setModelContent("Form");
    }

    const viewCard = (id)=>{
      setSelectedId(id)
      setModel(true)
      setModelContent("cardContent")
    }
    return (
      <div className="container">
          <div className="row">
            { animal.map((res, index)=>(
              <AnimalCard index={index} imageURL={res.imageURL} 
                id={res.id} commonName={res.commonName} 
                handleDelete={handleDelete} viewCard={viewCard}
                key={index}
              />
            ))}
          <div className="col-md-4 text-center  mt-5">
          <div className="add-card" onClick={() => creatCard()} >
              <i className="fa fa-plus" aria-hidden="true" ></i>
          </div>
          </div>
      </div>
        <div>
            <CreateNewAnimal
            modelContentCheck={ModelContent}
            modelOpen={ModelAnimal} 
            modelClose={() => setModel(false)}  
            selectedId={selectedId}/>
        </div>
      </div>
    );
}

export default AnimalCards;
