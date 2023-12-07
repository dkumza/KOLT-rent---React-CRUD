let newValueId = JSON.parse(localStorage.getItem("bikes"));
import { useState } from "react";

export const Create = ({ setCreate }) => {
   const [id, setId] = useState(0);
   const [registrationCode, setRegistrationCode] = useState(0);

   // console.log(newValueId[0].id);
   // add new Bike
   const handleNewBike = () => {
      setId((prevId) => id + 1);
      setCreate({
         id,
         registrationCode,
         isBusy: 0,
         lastUseTime: "",
         totalRideKilometers: 0,
      });
   };

   return (
      <div className="btn-box">
         <button type="button" className="btn btn-add" onClick={handleNewBike}>
            ADD
         </button>
      </div>
   );
};
