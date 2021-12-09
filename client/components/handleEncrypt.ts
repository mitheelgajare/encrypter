import React from "react";
import crypto from "crypto";

export const handleEncrypt = (
  e: React.ChangeEvent<HTMLInputElement>,
  input: string,
  algo: string
) => {
  e.preventDefault();

  let hash = crypto.createHash(algo).update(input).digest("hex");
  return hash;
};
