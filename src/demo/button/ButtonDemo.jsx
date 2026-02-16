import {DoodleButtonGroup} from "../../components/button/index.js";

const buttons = [
  { key: "primary", label: "主按钮", variant: "contained", color: "primary" },
  { key: "secondary", label: "次按钮", variant: "outlined", color: "secondary" },
  { key: "text", label: "文本按钮", variant: "text", color: "secondary" },
]

export function ButtonDemo() {
  return <DoodleButtonGroup buttons={buttons} direction={{ xs: "column", sm: "row" }} spacing={2} />
}
