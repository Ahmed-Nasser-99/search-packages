import axios from "axios";

export const fetchPackageByTrackingNumber = (
  trackingNumber: string,
  lang: string
) => {
  return axios.get(
    `https://tracking.bosta.co/shipments/track/${trackingNumber}?lang=${lang}`,
    {
      headers: {
        "x-requested-by": "Bosta",
      },
    }
  );
};
