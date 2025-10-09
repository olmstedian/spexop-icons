import { forwardRef } from 'react';
import { Icon, IconProps } from '../Icon';

export const TrendingFlat = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <Icon ref={ref} {...props}>
        <path d="M3 12h18"/>
      </Icon>
    );
  }
);

TrendingFlat.displayName = 'TrendingFlat';
