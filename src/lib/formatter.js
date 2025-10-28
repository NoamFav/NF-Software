export const money = (n, c = "USD", l = "en-US") =>
    new Intl.NumberFormat(l, {
        style: "currency",
        currency: c,
        maximumFractionDigits: 0,
    }).format(n);
