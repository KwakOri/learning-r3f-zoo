export const getUrl = (name, type) => {
  if (type === "animal") return `/models/animals/${name}.glb`;
  return `/models/dinos/${name}.glb`;
};
