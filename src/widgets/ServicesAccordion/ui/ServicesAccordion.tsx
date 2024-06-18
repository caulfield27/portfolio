'use client'
import { useState } from "react";
import { info } from "../model/info";
import Accordion from "@/shared/Accordion/Accordion";

export default function ServicesAccordion() {
  const [active, setActive] = useState<null | number>(null)
  return (
      <>
          {info.map((elem)=>{
              return <Accordion handleClick={()=> setActive(active === elem.id ? null : elem.id)}>
                  <Accordion.Title title={elem.title} isActive={active === elem.id ? true : false}/>
                  <Accordion.Content img={elem.poster} isActive={active === elem.id ? true : false}>
                      <p>{elem.description}</p>
                  </Accordion.Content>
              </Accordion>
          })}
          
      </>

  );
}
