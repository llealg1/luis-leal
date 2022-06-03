import React from 'react';
import {Box} from '@mui/material';
import {useThemeContext} from '../../../../utility/AppContextProvider/ThemeContextProvider';
// @ts-ignore
import Logo from '../../../../../assets/icon/logo_text1.svg';



interface AppLogoProps {
  color?: string;
}

const AppLogo: React.FC<AppLogoProps> = ({ color }) => {
  const {theme} = useThemeContext();

  return (
    <Box
      sx={{
        height: {xs: 56, sm: 100},
        width: {xs: 156, sm: 200},
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          height: {xs: 40, sm: 75},
        },
      }}
      className='app-logo'
    >
      <Logo fill={theme.palette.primary.main} />
    </Box>
  );
};

export default AppLogo;
