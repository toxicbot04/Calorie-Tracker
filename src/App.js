import { useState } from "react";

import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {

 let [items, setItems] = useState([]);
  return (
   <div className="main">
    <div className="header">
     <div className="header-text">Daily Calorie Tracker</div>
     </div> 
      
      <div className="content">
       <ItemList items={items}></ItemList>
       <AddItem
         callback={(name, calories) =>  {
          let newItems = [...items];
          newItems.push({ name, calories });
          setItems(newItems)
         } 
}
       ></AddItem>
      </div>
    </div>
  );
}

export default App;
