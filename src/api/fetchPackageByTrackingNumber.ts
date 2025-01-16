export const fetchPackageByTrackingNumber = async (trackingNumber: string) => {
  const response = await fetch(
    `https://tracking.bosta.co/shipments/track/${trackingNumber}`,
    {
      headers: {
        "x-requested-by": "Bosta",
      },
    }
  );
  return response.json();
};
