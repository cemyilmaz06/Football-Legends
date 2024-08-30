import { useState } from "react";
import { Container, FormControl } from "react-bootstrap"
import {data} from "../../helpers/data"
import LegendCard from "./LegendCard";
const LegendContainer=()=>{
const [search, setSearch] = useState("")
    return(
      <>
      <FormControl type="search" placeholder="Search legends..." onClick={(e)=>setSearch(e.target.value)} className="w-50 mx-auto my-2"/>
      
      <Container>
        {data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase().trim())).map((player)=>(
            <LegendCard {...player}/>
        ))}
       
      </Container>
      </>
    )
}
















export default LegendContainer;