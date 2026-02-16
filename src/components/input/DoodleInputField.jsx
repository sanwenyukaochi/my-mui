import { TextField } from "@mui/material"

export function DoodleInputField({ label, placeholder, value, onChange, fullWidth, ...rest }) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      {...rest}
    />
  )
}
