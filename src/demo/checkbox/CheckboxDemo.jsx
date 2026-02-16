import { useState } from "react"
import { FormControl, FormLabel } from "@mui/material"
import {DoodleCheckboxGroup} from "../../components/checkbox/index.js";

const options = [
  { key: "stickers", label: "贴纸风" },
  { key: "sketchBorder", label: "手绘边框" },
  { key: "colorBurst", label: "高饱和跳色" },
]

export function CheckboxDemo() {
  const [values, setValues] = useState({
    stickers: true,
    sketchBorder: false,
    colorBurst: true,
  })

  const handleItemChange = (key, checked) => {
    setValues((prev) => ({
      ...prev,
      [key]: checked,
    }))
  }

  return (
    <FormControl>
      <FormLabel>复选框（Checkbox）</FormLabel>
      <DoodleCheckboxGroup
        row
        values={values}
        options={options}
        onItemChange={handleItemChange}
      />
    </FormControl>
  )
}
