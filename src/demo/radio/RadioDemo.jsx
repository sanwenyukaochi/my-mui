import { useState } from "react"
import { FormControl, FormLabel } from "@mui/material"
import {DoodleRadioGroup} from "../../components/radio/index.js";

const options = [
  { value: "starter", label: "Starter" },
  { value: "pro", label: "Pro" },
  { value: "studio", label: "Studio" },
]

export function RadioDemo() {
  const [value, setValue] = useState("starter")

  return (
    <FormControl>
      <FormLabel>单选框（Radio）</FormLabel>
      <DoodleRadioGroup
        name="demo-radio"
        row
        value={value}
        onChange={(event) => setValue(event.target.value)}
        options={options}
      />
    </FormControl>
  )
}
