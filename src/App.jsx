import { useState, useEffect } from "react";
import "./App.css";

import { read, store, destroy, update } from "./js-functions/crud";

import { Create } from "./components/Create";
import { Show } from "./components/Show";

const KEY = "bikes";

function App() {
   const [bikes, setBikes] = useState([]); // store data
   const [create, setCreate] = useState(null); // create
   const [remove, setRemove] = useState(null); // delete
   const [clear, setClear] = useState(null); // destroy

   useEffect(() => {
      if (null === create) {
         return;
      }
      const id = store(KEY, create);
      setBikes((user) => [{ ...create, id }, ...user]);
      // addMessage("success", "Account has been created");
   }, [create]);

   return (
      <div className="app-wrap">
         <Create setCreate={setCreate} />
         <Show />
      </div>
   );
}

export default App;
