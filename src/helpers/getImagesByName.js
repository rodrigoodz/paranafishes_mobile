const getImagesByName = (imageName) => {
  switch (imageName) {
    case "anatomia":
      return require(`../images/others/anatomia.png`);
  }
};

export default getImagesByName;
