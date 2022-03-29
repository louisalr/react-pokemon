import React from "react";
import axios from "axios";

export default function Search(){

    const [pokemon, setPokemon] = React.useState({
        search_id : '',
        id : '', 
        name : '',
        type : [], //Type can be an array
        image : ''
    });


    //Change the value of the search_id on every input
    function handleChange(event){
        const {name, value} = event.target
    
        console.log(event.target.name);

        setPokemon(prevFormState =>{
          return{
            ...prevFormState,
            [name] : value
          }
        })
      }

    function handleSubmit(event){

        event.preventDefault();

        //Get the data from the api with the value inserted by the user
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.search_id}`)
            .then(res => setPokemon(prevPokemonState => {
                return{
                    ...prevPokemonState,
                    id : res.data.id,
                    name : res.data.name,
                    type : res.data.types,
                    image : res.data.sprites.back_default,
                }
        }))
    };


    //Loop in the type array and display them on the table
    const types = pokemon.type.map(one_type => (
        <p key={one_type.type.slot}> {one_type.type.name} </p>
    ))

    return(

        <div>

        <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nomorid" className="form-label">Id ou nom</label>
                <input type="text" className="form-control" id="nom" name="search_id"
                value={pokemon.search_id} onChange={handleChange}/>
            </div>

            <button className="btn btn-primary"> Chercher un pokémon </button>

        </form>
            

            {/* If pokemon.name is not null, then show the table */}
            {pokemon.name &&
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th> Type</th>
                    <th> Image</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{pokemon.id}</td>
                    <td>{pokemon.name}</td>
                    <td>{types}</td>
                    <td> <img src={pokemon.image} alt="pokemon"/></td>
                </tr>
                </tbody>
            </table> }

        </div>
        
    )

}
