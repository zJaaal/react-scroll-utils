import React, { FC, useLayoutEffect, useRef, useState } from "react";
import useProximity from "../hooks/useProximity";

const Render: FC<any> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const proximity = useProximity(ref);

  return (
    <div ref={ref}>{proximity >= 0 && proximity <= 2 ? children : null}</div>
  );
};

export default Render;
