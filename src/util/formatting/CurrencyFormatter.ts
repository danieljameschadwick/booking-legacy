const DEFAULT_LOCALE = {
    REGION: 'en-US',
    CURRENCY: 'USD',
};

export const formatCentesimal = (value: number): string => {
    return formatCurrency(value / 100);
};

export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat(DEFAULT_LOCALE.REGION, {
        style: 'currency',
        currency: DEFAULT_LOCALE.CURRENCY,
    }).format(value);
};
