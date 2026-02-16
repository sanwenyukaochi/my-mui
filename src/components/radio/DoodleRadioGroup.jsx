import { FormControlLabel, Radio, RadioGroup } from "@mui/material"

export function DoodleRadioGroup({ value, onChange, options, row, name }) {
  return (
    <RadioGroup row={row} value={value} onChange={onChange} name={name}>
      {options.map((item) => (
        <FormControlLabel
          key={item.value}
          value={item.value}
          control={<Radio />}
          label={item.label}
        />
      ))}
    </RadioGroup>
  )
}
