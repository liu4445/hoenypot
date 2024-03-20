import { vars } from '@/globalTheme.css';
import { style } from '@vanilla-extract/css';

export const titleText = style({
  lineHeight: '18px',
  fontSize: '18px',
  fontWeight: 700,
  padding: '4px 0px',
  borderBottom: `1px solid ${vars.colors.service.STROKE_OR_BLUR}`,
  marginBottom: '12px',
});

export const chartsWrapper = style({
  width: '100%',
  height: 'fit-content',
});

export const chartsContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const chartContainer = style({
  width: '100%',
  padding: '0px 24px',
});
