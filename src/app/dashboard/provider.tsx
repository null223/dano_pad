import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme"

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}