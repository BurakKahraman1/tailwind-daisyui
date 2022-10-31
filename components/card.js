import { useState } from "react";

function Card(){

    const [CardID,setCardID]=useState([
        {brand:'Adidas',id:1,img:302, model:'Sneaker', content:'It is a brand new Adidas brand'},
        {brand:'Nike',id:2, img:300, model:'Spike', content:'Neymar Jr Nike Spikes'},
        {brand:'Puma',id:3, img:301, model:'Shoes', content:'Usual Daily shoes from Puma'},
    ]

    
    )

    return(
<>
        {CardID.map((card)=>{
         return(
            <div key={card.id} className="mr-2 inline-block card card-compact h-auto w-40 bg-base-100 shadow-xl">
            <figure>
              <img src={`https://placeimg.com/${card.img}/225/arch`} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.model}</h2>
              <p>{card.content}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Visit {card.brand}</button>
              </div>
            </div>
    
            
          </div>   
         ) 
        })}
             <div className="flex bg-slate-500 pt-5 pb-5 ">
                <input placeholder='Brand' id="marka" type="text" className="ml-1 input input-bordered w-full max-w-xs" />
                <input placeholder='model' id="model" type="text" className="input input-bordered w-full max-w-xs" />
                 <input placeholder='icerik' id="icerik" type="text" className="input input-bordered w-full max-w-xs" />
            
             <button onClick={()=>{
                const marka=document.querySelector('#marka').value;
                const model=document.querySelector('#model').value;
                const icerik=document.querySelector('#icerik').value;

                   setCardID([
                    ...CardID,
                    {brand:marka, id:Math.random , img:299, model:model, content:icerik}
                   ]) 

             }} className="btn btn-primary h-10 mr-1 ml-1">ADD</button>
          
            </div>
    
            
       
    </>
    
    )
}
export default Card;