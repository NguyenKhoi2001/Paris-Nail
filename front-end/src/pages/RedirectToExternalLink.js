import React, { useEffect } from "react";

const link = `https://photos.google.com/share/AF1QipNqFFcv0Rn1RWRiXc8_2CaE6IhM3WdURTQ0GloZ1G_ty76vx3Mcp_l39nHEqSHpVg?key=aHUzOXFuSG5rVE4zdVdDdWMwNUtMT2ZZRlM1VFl3`;
const RedirectToExternalLink = () => {
  useEffect(() => {
    window.location.href = link;
  }, []);

  return <p>Redirecting...</p>;
};

export default RedirectToExternalLink;
//https://photos.google.com/share/AF1QipPxOHyoZnReI6FzSaNXGZUXD2IqUabaRnIXjgyurc167hVWx1B-XAHMRmRRyeLDyg?key=UjFKSkJjUTJEM1NnT0JidXZWdk5ZTXJTUi1TNVFB
