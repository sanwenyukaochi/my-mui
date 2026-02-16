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
          disableElevation
          sx={(theme) => ({
            border: "2px solid #242424",
            borderRadius: 999,
            boxShadow: theme.doodle?.shadow || "3px 3px 0 #242424",
            paddingInline: 2.25,
            transition: "transform 120ms ease, box-shadow 120ms ease",
            ...(item.variant === "contained" &&
              item.color === "primary" && {
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.doodle?.colors?.accent || "#ffc857"})`,
              }),
            ...(item.variant === "outlined" && {
              background: "#ffffff",
            }),
            "&:hover": {
              transform: "translate(-1px, -1px) rotate(-1deg)",
              boxShadow: "4px 4px 0 #242424",
            },
            "&:active": {
              transform: "translate(1px, 1px)",
              boxShadow: "1px 1px 0 #242424",
            },
          })}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  )
}
