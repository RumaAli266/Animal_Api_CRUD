import axios from "axios";

const {REACT_APP_BASE_URL,REACT_APP_CANDIDATE_ID } = process.env;

export const getAnimal = async () => {
    try{
        const animals = await axios.get(`${REACT_APP_BASE_URL}/Animal/List?candidateID=${REACT_APP_CANDIDATE_ID}`)
        return animals;
    }
    catch(error){
        console.log("something is wrong")
    }
}  
    
export const getAnimalById = async ( Id ) => {
    try{
        const animalBYId = await axios.get(`${REACT_APP_BASE_URL}/Animal/Id/${Id}?candidateID=${REACT_APP_CANDIDATE_ID}`)
        return animalBYId.data
    }
    catch(error){
        console.log("something is wrong")
    }
} 

export const createAnimal = async ( data ) => {
    try{
        const animal = await axios.post(`${REACT_APP_BASE_URL}/Animal/Create?candidateID=${REACT_APP_CANDIDATE_ID}`, data);
        return animal;
    } catch (error) {
        console.log("something is Wrong");
    }
}

export const deleteAnimal = async ( data ) => {
    try{
        await axios.post(`${REACT_APP_BASE_URL}/Animal/Delete?candidateID=${REACT_APP_CANDIDATE_ID}`, data)
    } catch (error) {
        console.log("something is Wrong");
    }
}
