import React from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import {
  Box,
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  SxProps,
  Typography,
} from '@mui/material';

import ArrowRightRounded from 'src-new/svg/ArrowRightRounded';

const hasLinkStyle: SxProps = {
  fontFamily: 'Avenir-Black',
  fontSize: '16px',
  lineHeight: '25px',
  display: 'flex',
  alignItems: 'center',
};

type Props = {
  muiProps?: MuiLinkProps;
  children: React.ReactNode;
  hasArrow?: Boolean;
} & NextLinkProps;

const Link = ({ href, muiProps, hasArrow, children, ...props }: Props) => {
  return (
    <NextLink href={href} passHref {...props}>
      <MuiLink underline="none" {...muiProps}>
        {hasArrow ? (
          <Typography component="span" sx={hasLinkStyle}>
            {children}
            <Box component="span" sx={{ display: 'flex', ml: 1.5 }}>
              <ArrowRightRounded height={11} color="currentColor" />
            </Box>
          </Typography>
        ) : (
          children
        )}
      </MuiLink>
    </NextLink>
  );
};

export default Link;
