import { alpha } from "@mui/material/styles"
import { TextField } from "@mui/material"

export function DoodleInputField({ label, placeholder, value, onChange, fullWidth, ...rest }) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      sx={(theme) => ({
        "& .MuiFormLabel-root": {
          color: theme.palette.text.primary,
          fontWeight: 700,
        },
        "& .MuiFormLabel-root.Mui-focused": {
          color: theme.palette.secondary.main,
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          backgroundColor: "#fffef8",
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
            borderColor: "#242424",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#242424",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.secondary.main,
            borderWidth: 3,
          },
          "&.Mui-focused": {
            boxShadow: `0 0 0 4px ${alpha(theme.palette.secondary.main, 0.22)}`,
          },
        },
        "& .MuiOutlinedInput-input": {
          paddingTop: 1.5,
          paddingBottom: 1.5,
        },
      })}
      {...rest}
    />
  )
}
