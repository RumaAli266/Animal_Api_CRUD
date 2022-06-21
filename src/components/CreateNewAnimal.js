import React, { useEffect, useState } from "react"
import { Button ,Modal, ModalFooter } from 'react-bootstrap';
import { createAnimal, getAnimalById } from './animals.service'

const CreateNewAnimal = ({
  modelOpen,
  modelContentCheck,
  modelClose,
  selectedId
}) =>{
    const [commonName, setCommonName]=useState('');
    const [scientificName, setScientificName]=useState('');
    const [family, setFamily]=useState('');
    const [imageURL, setImageURL]=useState('');
    const [data, setData] = useState({});

    const getSingleAnimal = async () => {
      const {animal} = await getAnimalById(selectedId);
      setData(animal)
    }

    useEffect(()=>{
      if(modelContentCheck === "cardContent"){
        getSingleAnimal()
      }
    },[selectedId])
    
    const onFormSubmit = async () => {
       const data = {
          commonName:commonName,
          scientificName: scientificName,
          family: family,
          imageURL: imageURL
      }
      let res =await createAnimal(data)
      if(res){
        getSingleAnimal()
      }
    }

    return (
        <>
      <Modal show={modelOpen} >
        <Modal.Body>
          { modelContentCheck === "cardContent" ?
          (<div className="text-center">
           
            <img className="card-img-top rounded-circle w-75" src={data.imageURL} alt="image " />
            <h3 className="card-text mt-4 mb-4">{data.commonName}</h3>
          </div>)
          :
        (<form onSubmit={onFormSubmit}>
        
        <div  className="form-header text-center mb-3 mt-3">
        <h3 >Enter Animal Data</h3>
        </div>
        <div  className="form-group">
                <label htmlFor='commonName' className='text-style'>Common Name  *</label><br/>
                <input type="text" required autoComplete='off' className="form-control"
                value={commonName}
                onChange={(e)=> setCommonName(e.target.value)}
                name="commonName" id="commonName" /><br/><br/>
            </div>
            <div>
                <label htmlFor='scientificName' className='text-style'>Scientific Name  *</label><br/>
                <input type="text" required autoComplete='off' className="form-control"
                value={scientificName}
                onChange={(e)=> setScientificName(e.target.value)}
                name="scientificName" id="scientificName" /><br/><br/>
            </div>
            <div>
                <label htmlFor='family' className='text-style '>Family *</label><br/>
                <input type="text" required autoComplete='off'  className="form-control"
                value={family}
                onChange={(e)=> setFamily(e.target.value)}
                name="family" id="family" /><br/><br/>
            </div>
            <div>
                <label htmlFor='imageURL' className='text-style'>imageURL  *</label><br/>
                <input type="text" required autoComplete='off' className="form-control"
                value={imageURL}
                onChange={(e)=> setImageURL(e.target.value)}
                name="imageURL" id="imageURL" /><br/>
            </div><br/>

          <div className="button-div">
            {  modelContentCheck === "Form" && <Button type='submit' variant="primary">
            Add
            </Button>
            }
            <Button variant="secondary" onClick={modelClose}>
              Close
            </Button>
          </div>
        </form>)}
        </Modal.Body>
        {  modelContentCheck !== "Form" && <ModalFooter>
           <Button variant="secondary" onClick={modelClose}>
              Close
            </Button>
        </ModalFooter>
          }
      </Modal>
      </>
    )
}

export default CreateNewAnimal