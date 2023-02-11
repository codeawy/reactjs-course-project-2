export const txtSlicer = (txt, max) => {
  if (txt?.length > max) return txt.slice(0, max) + "...";

  return txt;
};
