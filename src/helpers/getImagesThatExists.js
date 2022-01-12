//Funcion para traer todas aquellas imagenes adicionales de alguna especie en particular desde el storage de Firebase

import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const getMoreFishesImages = async (fishName) => {
  const storage = getStorage();
  const storageRef = ref(storage, "");

  const data = await listAll(storageRef).then(async (res) => {
    //Busco aquellos archivos que contiene al nombre cientifico y ademas no son la imagen que uso ya para la descripcion
    const filteredData = await res.items.filter((item) => {
      if (item.name.includes(fishName) && item.name !== `${fishName}.png`) {
        return item;
      }
    });

    // obtener solo nombre
    // filteredData.map((i) => fishesImages.push(i.name));

    // obtener URLS de los datos filtrados
    const urls = await Promise.all(
      filteredData.map(async (item) => {
        const url = await getDownloadURL(item);
        return url;
      })
    );

    return urls;
  });
  return data;
};

export default getMoreFishesImages;
