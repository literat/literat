'use client';

import { useState } from "react";

const useOldMe = () => {
  const birth = 583588801000;
  const [age, setAge] = useState(Date.now() - birth);

  return {
    age,
    // this doesn't account for leap years and will be wrong in about 1400 years
    ageAsYears: Math.floor(age / 1000 / 60 / 60 / 24 / 365),
  };
};

export default function AgeInYears() {
  const { ageAsYears } = useOldMe();

  return <>{ageAsYears}</>;
}
