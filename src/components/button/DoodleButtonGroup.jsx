import { Button, Stack } from "@mui/material"

export function DoodleButtonGroup({ buttons, direction, spacing }) {
  return (
    <Stack direction={direction} spacing={spacing}>
      {buttons.map((item) => (
        <Button
          key={item.key}
          variant={item.variant}
          color={item.color}
          onClick={item.onClick}
          disabled={item.disabled}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  )
}
