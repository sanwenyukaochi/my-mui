import { createTheme } from "@mui/material/styles"

// 1) 主题 token：仅定义设计变量，不直接绑定到某个具体组件实现
const colors = {
  background: "#fff8e8",
  card: "#fffdf5",
  ink: "#242424",
  primary: "#ff7b54",
  secondary: "#44bba4",
  accent: "#ffc857",
  muted: "#626262",
}

const doodleShadow = "3px 3px 0 #242424"

// 2) 主题只做全局能力：色板、字体、圆角、基础页面背景
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary,
      contrastText: "#ffffff",
    },
    secondary: {
      main: colors.secondary,
      contrastText: "#ffffff",
    },
    background: {
      default: colors.background,
      paper: colors.card,
    },
    text: {
      primary: colors.ink,
      secondary: colors.muted,
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"DFGirl", "Comic Sans MS", "Marker Felt", cursive',
    h4: {
      fontWeight: 700,
      letterSpacing: "0.03em",
    },
    subtitle1: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          minHeight: "100vh",
          color: colors.ink,
          backgroundColor: colors.background,
          backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(255,123,84,0.18) 0 72px, transparent 74px), radial-gradient(circle at 88% 82%, rgba(68,187,164,0.16) 0 90px, transparent 92px), repeating-linear-gradient(0deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 1px, transparent 1px, transparent 28px)",
        },
      },
    },
  },
})

// 3) 组件可复用的自定义 token：在组件里通过 theme.doodle 读取
theme.doodle = {
  shadow: doodleShadow,
  colors,
}

export default theme
