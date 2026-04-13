import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';

type SmawBadgeProps = {
  className?: string;
};

export function SmawBadge({ className }: SmawBadgeProps) {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <p
      className={cn(
        'text-[10px] text-muted-foreground/40 text-center select-none py-1 tracking-wide',
        className,
      )}
    >
      {isRtl ? 'مُزامن من تطوير SMAW' : 'Muzamen by SMAW'}
    </p>
  );
}
