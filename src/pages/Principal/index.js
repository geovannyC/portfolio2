import React from "react";
import DiagonalContainer from "../../components/ui/diagonalContainer";
import MidleScreenContainer from "../../components/ui/midleScreenContainer";
import Welcomer from "../../components/ui/welcomer";

const Principal = ({ offset, onClick }) => (
  <>
    <MidleScreenContainer onClick={onClick} />
    <DiagonalContainer onClick={onClick} gradient="cream" />
    <Welcomer onClick={onClick} offset={offset}/>
  </>
);

export default Principal;
