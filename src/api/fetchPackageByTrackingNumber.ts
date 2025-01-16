export const fetchPackageByTrackingNumber = async (
  trackingNumber: string,
  lang: string
) => {
  const response = await fetch(
    `https://tracking.bosta.co/shipments/track/${trackingNumber}?lang=${lang}`,
    {
      headers: {
        "x-requested-by": "Bosta",
      },
    }
  );
  return response.json();
};
