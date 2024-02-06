import { useParams } from "react-router-dom";
import DetailView from "../views/DetailView";
import { useEffect, useState } from "react";
import Modal from '../models/DetailModal'

const DetailController = () => {
    const [coin, setCoin] = useState(null)
      
   const {id} = useParams();


   useEffect(() => {
Modal.getCoin(id).then((res) =>setCoin(res));
   }, [])

   const modal= new Modal(coin);

  return <DetailView  modal={modal}/>;
};

export default DetailController;
