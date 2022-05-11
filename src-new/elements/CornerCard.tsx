import React from 'react';

import { Box, SxProps } from '@mui/material';
import { COLORS } from 'src/theme';

const defaultStyles: SxProps = {
  fontFamily: 'Avenir',
  textTransform: 'none',
  zIndex: '0',
  position: 'relative',
  backgroundImage: `linear-gradient(-45deg, transparent 10%, ${COLORS.bigStone} 0% 100%)`,
  borderRadius: 1.25,
  color: '#fff',
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
  width: '100%',
  p: 3.75,
  m: '0 auto',

  '&:hover': {
    backgroundImage: `linear-gradient(-45deg, transparent 10%, #6D64F5 0%, #C9C3FF 100%)`,
  },

  '&:before': {
    zIndex: '-1',
    content: '""',
    position: 'absolute',
    left: '3px',
    right: '3px',
    top: '3px',
    bottom: '3px',
    borderRadius: 1.25,
    background: `linear-gradient(-45deg, transparent 10%, ${COLORS.bigStone} 0%)`,
  },
};

const logoContained: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '250px',
  maxWidth: '355px',
};

const quoteCard: SxProps = {
  display: 'flex',
  backgroundImage: `linear-gradient(-45deg, transparent 14%, ${COLORS.bigStone} 0% 100%)`,
  '&:hover': {
    backgroundImage: `linear-gradient(-45deg, transparent 14%, ${COLORS.bigStone} 0% 100%)`,
  },
  '&:before': {
    zIndex: '-1',
    content: '""',
    position: 'absolute',
    left: '3px',
    right: '3px',
    top: '3px',
    bottom: '3px',
    borderRadius: 1.25,
    background: `linear-gradient(-45deg, transparent 14%, ${COLORS.bigStone} 0%)`,
  },
};

const typeStyles = {
  logoContained,
  quoteCard,
};

type Props = {
  children: React.ReactNode;
  styleType?: 'logoContained' | 'quoteCard';
};

const CornerCard = ({ children, styleType = 'logoContained', ...props }: Props) => {
  return (
    <Box
      {...props}
      sx={{
        ...defaultStyles,
        ...typeStyles[styleType],
      }}
    >
      {children}
    </Box>
  );
};

export default CornerCard;
