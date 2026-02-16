import { alpha, createTheme } from '@mui/material/styles'

// 1) 统一管理主题色：后续所有组件样式都尽量从这里取值，避免颜色散落在各处
const colors = {
  background: '#fff8e8',
  card: '#fffdf5',
  ink: '#242424',
  primary: '#ff7b54',
  secondary: '#44bba4',
  accent: '#ffc857',
  muted: '#626262',
}

// 2) 涂鸦风核心阴影：模拟手绘贴纸那种“偏移描边”视觉
const doodleShadow = '3px 3px 0 #242424'

// 3) createTheme 是 MUI 主题入口：集中定义调色板、排版、圆角和组件覆写
const theme = createTheme({
  // 3.1 基础色板：定义主色/辅助色/背景/文字，供 MUI 组件默认消费
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.secondary,
      contrastText: '#ffffff',
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
  // 3.2 全局圆角：多数组件默认会继承这个圆角基准
  shape: {
    borderRadius: 14,
  },
  // 3.3 字体系统：标题、按钮等文本风格在这里统一
  typography: {
    fontFamily: '"DFGirl", "Comic Sans MS", "Marker Felt", cursive',
    h4: {
      fontWeight: 700,
      letterSpacing: '0.03em',
    },
    subtitle1: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'none',
    },
  },
  // 3.4 组件级覆写：在这里把默认 MUI 外观改造成“涂鸦元素风格”
  components: {
    // 全局基础样式（相当于全局 reset + 主题背景层）
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     body: {
    //       margin: 0,
    //       minHeight: '100vh',
    //       color: colors.ink,
    //       backgroundColor: colors.background,
    //       // 叠加两个径向渐变 + 细线网格，做出纸面涂鸦感背景
    //       backgroundImage:
    //         'radial-gradient(circle at 12% 18%, rgba(255,123,84,0.18) 0 72px, transparent 74px), radial-gradient(circle at 88% 82%, rgba(68,187,164,0.16) 0 90px, transparent 92px), repeating-linear-gradient(0deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 1px, transparent 1px, transparent 28px)',
    //     },
    //   },
    // },
    // 卡片容器（Paper）：加粗边框 + 偏移阴影，强化手绘卡片观感
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '2px solid #242424',
          boxShadow: doodleShadow,
        },
      },
    },
    // 按钮：圆角胶囊 + 描边 + hover/active 位移，模拟手绘按压反馈
    MuiButton: {
      defaultProps: {
        // 关闭 MUI 默认阴影，避免和我们自定义阴影叠加冲突
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          border: '2px solid #242424',
          borderRadius: 999,
          boxShadow: doodleShadow,
          paddingInline: 18,
          transition: 'transform 120ms ease, box-shadow 120ms ease',
          '&:hover': {
            transform: 'translate(-1px, -1px) rotate(-1deg)',
            boxShadow: '4px 4px 0 #242424',
          },
          '&:active': {
            transform: 'translate(1px, 1px)',
            boxShadow: '1px 1px 0 #242424',
          },
        },
        // 主按钮用渐变强调层级
        containedPrimary: {
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
        },
        // 描边按钮保留白底，提升可读性
        outlined: {
          background: '#ffffff',
        },
      },
    },
    // 输入框：加粗边框 + 聚焦描边光晕，突出交互状态
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#fffef8',
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
            borderColor: '#242424',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#242424',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.secondary,
            borderWidth: '3px',
          },
          '&.Mui-focused': {
            boxShadow: `0 0 0 4px ${alpha(colors.secondary, 0.22)}`,
          },
        },
        // 调整输入区上下内边距，让视觉更“饱满”
        input: {
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },
    // 表单标签：默认墨色，focus 跟随主题辅助色
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.ink,
          fontWeight: 700,
          '&.Mui-focused': {
            color: colors.secondary,
          },
        },
      },
    },
    // 复选框：放大图标并加轻微倾斜，做手绘感“跳动”效果
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.ink,
          '& .MuiSvgIcon-root': {
            fontSize: 30,
            filter: 'drop-shadow(1px 1px 0 #242424)',
          },
          '&.Mui-checked': {
            color: colors.secondary,
            transform: 'rotate(-5deg)',
          },
        },
      },
    },
    // 单选框：与复选框一致的手绘逻辑，但使用主色强调选中态
    MuiRadio: {
      styleOverrides: {
        root: {
          color: colors.ink,
          '& .MuiSvgIcon-root': {
            fontSize: 30,
            filter: 'drop-shadow(1px 1px 0 #242424)',
          },
          '&.Mui-checked': {
            color: colors.primary,
            transform: 'rotate(6deg)',
          },
        },
      },
    },
  },
})

// 4) 导出主题对象，供 ThemeProvider 注入全应用
export default theme
