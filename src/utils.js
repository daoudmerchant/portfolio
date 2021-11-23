export const getSrcSet = (array) => {
  let srcSet = "";
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) srcSet += ", ";
    srcSet += `${array[i]} ${i + 1}x`;
  }
  return srcSet;
};

export const getSrcSets = (array) => {
  return array.map((imgSet) => (
    <source srcSet={getSrcSet(imgSet.files)} type={`image/${imgSet.type}`} />
  ));
};
