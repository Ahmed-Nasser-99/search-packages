import React from "react";

interface PackageDetailsProps {
  data: any;
}

const PackageDetails = ({ data }: PackageDetailsProps) => {
  if (!data) return null;
  return <div>PackageDetails</div>;
};

export default PackageDetails;
