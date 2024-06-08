import React from "react";

import { IToggleProps } from "./toggle.types";

export function Toggle({ isToggle, firstElement, secondElement }: IToggleProps) {
  return <>{isToggle ? firstElement : secondElement}</>;
}
