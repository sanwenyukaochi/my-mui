import { useState } from "react"
import {DoodleInputField} from "../../components/input/index.js";

export function InputDemo() {
  const [value, setValue] = useState("")

  return (
    <DoodleInputField
      label="输入框（TextField）"
      placeholder="输入你的组件库名字..."
      value={value}
      fullWidth
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
