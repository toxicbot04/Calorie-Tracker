export default function ItemsList(props) {
 const items = props.items;
 const calSum = props.items.reduce(
   (a, b) => {
     return { calories: a.calories + b.calories };
   },
   {
     calories: 0,
   }
 );

 return (
   <div className="items-container">
     <div className="items-title">Added Items:</div>
     <div className="items-list">
       {items.map((e) => {
         return (
           <div className="item" key={e.name}>
             <div className="item-name">{e.name}</div>
             <div className="item-calories">{e.calories} Cal</div>
           </div>
         );
       })}
     </div>

     { (
       <>
         <div className="underline"></div>
         <div className="item">
           <div className="item-name">Total</div>
           <div className="item-calories">{calSum.calories} Cal</div>
         </div>
       </>
     )
     }
   </div>
 );
}