import "../App.css";

// Import dependencies
import React from "react";
import GameTemplate from "../components/GameTemplate";
import { letterBank } from "../constants/wordBank";

function AllClasses() {
  const wordBank = letterBank;
  wordBank.splice(9, 1); // remove j
  wordBank.splice(24, 1); // remove z
  return (
    <GameTemplate
      id="extended"
      title="Alphabet Game"
      description={
        "This model underwent training on a dataset comprising 24 alphabets, aiming to offer a comprehensive representation suitable for a sign language alphabet game. Notably, the letters 'J' and 'Z' were omitted from the training set due to their dynamic nature involving motion."
      }
      wordBank={wordBank}
      modelUrl={
        "https://raw.githubusercontent.com/druu-bot/Sign-repo/main/ReactCV/src/tfjs_model_mobilenetv2_fpnlite_all_classes_v2/model.json"
      }
    />
  );
}

export default AllClasses;
