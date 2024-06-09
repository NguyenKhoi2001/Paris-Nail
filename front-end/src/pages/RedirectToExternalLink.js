import React, { useEffect } from "react";

const link = `https://photos.google.com/share/AF1QipPxOHyoZnReI6FzSaNXGZUXD2IqUabaRnIXjgyurc167hVWx1B-XAHMRmRRyeLDyg?key=UjFKSkJjUTJEM1NnT0JidXZWdk5ZTXJTUi1TNVFB`;
const RedirectToExternalLink = () => {
  useEffect(() => {
    window.location.href = link;
  }, []);

  return <p>Redirecting...</p>;
};

export default RedirectToExternalLink;
//https://photos.google.com/share/AF1QipPxOHyoZnReI6FzSaNXGZUXD2IqUabaRnIXjgyurc167hVWx1B-XAHMRmRRyeLDyg?key=UjFKSkJjUTJEM1NnT0JidXZWdk5ZTXJTUi1TNVFB
