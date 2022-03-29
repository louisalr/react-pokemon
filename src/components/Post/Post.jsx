import React from "react";
import axios from "axios";

export default function Post(){

    const [pokemon, setPokemon ] = React.useState({
        pokemon_id:'',
        nom:'',
        type: [],
        image: '', 
        api_answer : '',
    });

    //to get the response of the api
    const [api_res, setApiRes] = React.useState('');


    function handleChange(event){
        const {name, value} = event.target

        setPokemon(prevFormState =>{
          return{
            ...prevFormState,
            [name] : value
          }
        })
    }

    function handleSubmit(event){
        event.preventDefault();


        //post request using axios
        axios.post('http://127.0.0.1:8000/api/pokemon/store',{pokemon_id: pokemon.pokemon_id,name: pokemon.nom,
            type: pokemon.type, image: pokemon.image})
            .then((res) => setApiRes(res.data.message))
            .catch((err) => console.log(err.data.message));
    }


    return(

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nomorid" className="form-label">Id ou nom</label>
                <input type="text" className="form-control" id="id_poke" name="pokemon_id" 
                value={pokemon.pokemon_id} onChange={handleChange}/>

            </div>

            <div className="mb-3">
                <label htmlFor="nomorid" className="form-label">Nom </label>
                <input type="text" className="form-control" id="nom" name="nom"
                value={pokemon.nom} onChange={handleChange}/>
                
            </div>

            <div className="mb-3">
                <label htmlFor="nomorid" className="form-label">Type</label>
                <input type="text" className="form-control" id="nom" name="type"
                value={pokemon.type} onChange={handleChange}/>
                
            </div>

            <div className="mb-3">
                <label htmlFor="nomorid" className="form-label">Image</label>
                <input type="text" className="form-control" id="nom" name="image"
                value={pokemon.image} onChange={handleChange}/>
                
            </div>
            <button className="btn btn-primary">Ajouter le pokémon</button>


            {api_res && <div className="alert alert-success" role="alert">
                {api_res}
            </div>}

        </form>

    )
}

