import { StyleSheet, TextStyle } from 'react-native';

export const spacing = {
  xs: 2,
  sm: 4,
  m: 8,
  lg: 16,
  xl: 32,
};

export const colors = {
  bg: 'rgb(255,255,255)',
  fg: 'rgb(41,41,41)',
  grey: 'rgb(117,117,117)',
  grey2: 'rgb(168,168,168)',
  secondary: '#006eff',
  primary: 'green',
};

const fontSize = {
  sm: 14,
  m: 16,
  lg: 16,
};

export const text = StyleSheet.create({
  body: {
    color: colors.fg,
    fontSize: fontSize.m,
  },
  cardTitle: {
    color: colors.fg,
    fontSize: fontSize.m,
    fontWeight: 'bold',
  },
  subtle: {
    color: colors.grey,
    fontSize: fontSize.sm,
    fontWeight: 'normal',
  },
  section: {
    color: colors.secondary,
    fontSize: fontSize.sm,
    fontWeight: 'bold',
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
});
