import { useEffect, useState } from "react";
import modal from "../models/MainPageModal";
import MainPageView from "../views/MainPageView";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    modal.getCoins(page).then((data) => setCoins(coins.concat(data)));
  }, [page]);

  return <MainPageView coins={coins} setPage={setPage} />;
};

export default MainPageController;
