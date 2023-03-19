export const uploadImage = async (data) => {
  fetch(`  https://api.cloudinary.com/v1_1/di8tdudrn/image/upload`, {
    method: "post",
    body: data,
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      //setUrl(data.url);
    });
};
