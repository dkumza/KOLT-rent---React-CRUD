import { useState } from "react";

export const Create = ({ setCreate }) => {
   // const [id, setId] = useState(0);
   const [registrationCode, setRegistrationCode] = useState(0);

   // add new Bike
   const handleNewBike = () => {
      setCreate({
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
