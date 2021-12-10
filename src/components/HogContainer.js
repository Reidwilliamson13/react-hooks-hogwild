import { useState } from "react";
import HogTile from "./HogTile";


function HogContainer({hogs}) {

const [myHogs, setMyHogs] = useState(hogs)  
const [filteredByGreased, setFilteredByGreased] = useState(true)
const [sortedByName, setSortedByName] = useState(false)


function handleFilter(e){    
setFilteredByGreased(!filteredByGreased)


if(e.target.checked) {
    const hogsFiltered = myHogs.filter(hog => {
        return hog.greased === true
    })
    setMyHogs(hogsFiltered)
    }
    else
     setMyHogs(hogs)

    }


function handleSort(e){
setSortedByName(!sortedByName)

if(e.target.checked) {
   let sortedHogs = myHogs.slice().sort( (a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
   })
   setMyHogs(sortedHogs)
    }
    else
     setMyHogs(hogs)
    }

}


  return (
    <div>
      <div>
        Only greased: <input onClick={handleFilter} checked={filteredByGreased} type="Checkbox" id="filter" />
      </div>
      <div>
        Sort by name: <input onClick={handleSort} type="Checkbox" id="filter" />
      </div>
      {hogs.map( hog => <hogTile hog={hog} />)}
    </div>
  );
}


export default HogContainer;