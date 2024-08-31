import { useState } from "react";
import { Container, FormControl } from "react-bootstrap"
import Row from "react-bootstrap/Row";
import {data} from "../../helpers/data"
import LegendCard from "./LegendCard";
const LegendContainer=()=>{
const [search, setSearch] = useState("")
    return(
      <>
      <FormControl type="search" placeholder="Search legends..." onChange={(e)=>setSearch(e.target.value)} className="w-50 mx-auto my-2"/>
      
      <Container className="p-3 rounded-4 card-container my-3">
      <Row className="justify-content-center g-3">
        {data.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase().trim())).map((player)=>(
            <LegendCard {...player}/>
        ))}
       </Row>
      </Container>
      </>
    )
}
















export default LegendContainer;