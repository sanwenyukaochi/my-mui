import { Box, Container, Paper, Stack, Typography } from "@mui/material"
import {RadioDemo} from "./demo/radio/index.js";
import {CheckboxDemo} from "./demo/checkbox/index.js";
import {InputDemo} from "./demo/input/index.js";
import {ButtonDemo} from "./demo/button/index.js";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Paper
        sx={{
          p: { xs: 2.5, md: 4 },
          borderRadius: 5,
          transform: { md: "rotate(-0.4deg)" },
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" gutterBottom>
              MUI 涂鸦元素主题
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              下面是二次定制组件示例：单选框、复选框、输入框、按钮。
            </Typography>
          </Box>

          <RadioDemo />
          <CheckboxDemo />
          <InputDemo />
          <ButtonDemo />
        </Stack>
      </Paper>
    </Container>
  )
}
