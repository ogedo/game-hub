import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  //change the color of the score conditionally
  let color = score > 90 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize={14} paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
