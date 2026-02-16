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
              sx={(theme) => ({
                color: theme.palette.text.primary,
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                  filter: "drop-shadow(1px 1px 0 #242424)",
                },
                "&.Mui-checked": {
                  color: theme.palette.secondary.main,
                  transform: "rotate(-5deg)",
                },
              })}
            />
          }
          label={item.label}
        />
      ))}
    </FormGroup>
  )
}
