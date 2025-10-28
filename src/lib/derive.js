export const deriveCardPricing = (toolOrSuite) => ({
    annual:
        toolOrSuite.plan?.annual ??
        toolOrSuite.plans?.individual?.annual ??
        null,
    oneTime:
        toolOrSuite.plan?.oneTime ??
        toolOrSuite.plans?.individual?.oneTime ??
        null,
});
