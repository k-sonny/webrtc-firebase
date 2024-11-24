import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn({ localPeerName, remotePeerName, setRemotePeerName }) {

  const label = '상대방의 이름'
  const [name, setName] = React.useState('')
  const [disabled, setDisabled] = React.useState(true)
  const [isComposed, setIsComposed] = React.useState(false)

  React.useEffect(() => {
    setDisabled(name === "")
  }, [name])

  const initializeRemotePeer = React.useCallback((e) => {
    setRemotePeerName(name);
    e.preventDefault();
  }, [name, setRemotePeerName]);

  if (localPeerName === '') return <></>
  if (remotePeerName !== '') return <></>

  return (
    <AppTheme >
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            {label} 입력해주세요
          </Typography>
          <FormControl>
            <FormLabel htmlFor="name">이름</FormLabel>
            <TextField
              autoFocus
              fullWidth
              name="name"
              onChange={(e) => setName(e.target.value)}
              onCompositionEnd={() => setIsComposed(false)}
              onCompositionStart={() => setIsComposed(true)}
              onKeyDown={(e) => {
                if (isComposed) return;
                if (e.target.value === '') return;
                if (e.key === "Enter")
                  initializeRemotePeer(e);
              }}
              placeholder={label}
              required
              sx={{ ariaLabel: 'name' }}
              type="text"
              value={name}
              variant="outlined"
            />
          </FormControl>
          <Box
            component="form"
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}

          >
            <Button
              type="submit"
              fullWidth
              disabled={disabled}
              variant="outlined"
              onClick={(e) =>
                initializeRemotePeer(e)
              }
            >
              결정
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </AppTheme>
  );
}
