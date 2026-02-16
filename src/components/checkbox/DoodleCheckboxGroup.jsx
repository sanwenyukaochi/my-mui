import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"

export function DoodleCheckboxGroup({ values, onItemChange, options, row }) {
  return (
    <FormGroup row={row}>
      {options.map((item) => (
        <FormControlLabel
          key={item.key}
          control={
            <Checkbox
              checked={Boolean(values[item.key])}
              onChange={(event) => onItemChange(item.key, event.target.checked, event)}
            />
          }
          label={item.label}
        />
      ))}
    </FormGroup>
  )
}
