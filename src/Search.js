import React from 'react';

const Search = () => {
  return ( 
     <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor='searchItem'>Search brands</label>
        <input 
           type='text'
           placeholder="&#xF002; Search Brands" 
           style={
            { fontFamily:'FontAwesome',
              width: '25vw',
              height: '5vh', 
              fontSize:'15px',
              borderRadius:'5px',
              background: '#eaeaea',
              border:'none', 
              textAlign:'center', 
            }
           }
           id='search'
         //   value={}
         //   onChange={(e)=> setSearch(e.target.value)}
        />
    </form>  
  )
}

export default Search
