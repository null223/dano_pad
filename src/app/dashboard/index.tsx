import React from "react";
import { Provider } from "./provider";
import { Typography, Box, Dialog, DialogContent, DialogTitle, Fab, Fade, IconButton, Tooltip } from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { usePath } from "../../lib/path";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} />;
});

interface Props {
  path: string;
  children: React.ReactNode;
}

export const Dashboard: React.FC<Props> = ({ path: _path, children }) => {
  const [open, setOpen] = React.useState(false);
  const { path, shortPath } = usePath(_path);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Provider>
      <Box position="relative">
        <Fab
          color="primary"
          onClick={() => {
            setOpen((open) => !open);
          }}
          sx={{
            position: "fixed",
            right: theme => theme.spacing(4),
            bottom: theme => theme.spacing(4),
          }}
        >
          <BlurOnIcon />
        </Fab>

        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          hideBackdrop
          sx={{
            top: "auto",
            left: "auto",
            right: theme => theme.spacing(2),
            bottom: theme => theme.spacing(2),
          }}
          PaperProps={{
            sx: {
              m: 0,
              bgcolor: theme => theme.palette.primary.main,
              height: 400,
              width: 320,
              borderRadius: 8,
            }
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 6,
              color: theme => theme.palette.primary.contrastText,
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle
            component="div"
            sx={{
              borderBottom: theme => `1px solid ${theme.palette.primary.contrastText}`,
            }}
          >
            <Tooltip title={path} placement="top">
              <Typography sx={{
                fontSize: 12,
                textAlign: "left",
                color: theme => theme.palette.primary.contrastText,
                fontWeight: "bold",
                maxWidth: 240,
                overflowX: "auto",
              }}>{shortPath}</Typography>
            </Tooltip>
          </DialogTitle>
          <DialogContent
            sx={{
              display: "inline-block",
              color: theme => theme.palette.primary.contrastText,
              textAlign: "left",
              overflowY: "auto",
              p: 0,
            }}
          >
            {children}
          </DialogContent>
        </Dialog>
      </Box>
    </Provider>
  );
};
