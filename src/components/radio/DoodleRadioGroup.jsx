import { FormControlLabel, Radio, RadioGroup } from "@mui/material"

export function DoodleRadioGroup({ value, onChange, options, row, name }) {
  return (
    <RadioGroup row={row} value={value} onChange={onChange} name={name}>
      {options.map((item) => (
        <FormControlLabel
          key={item.value}
          value={item.value}
          control={
            <Radio
              sx={(theme) => ({
                color: theme.palette.text.primary,
                "& .MuiSvgIcon-root": {
                  fontSize: 30,
                  filter: "drop-shadow(1px 1px 0 #242424)",
                },
                "&.Mui-checked": {
                  color: theme.palette.primary.main,
                  transform: "rotate(6deg)",
                },
              })}
            />
          }
          label={item.label}
        />
      ))}
    </RadioGroup>
  )
}
