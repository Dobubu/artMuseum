function upload(formData) {
    const photos = formData.getAll('photos');
    const promises = photos.map((x) => getImage(x)
        .then(img => ({
            id: img,
            originalName: x.name,
            fileName: x.name,
            url: img,
            type: x.type
        })));
    return Promise.all(promises);
}

function getImage(file) {
    console.log(file.type)

    return new Promise((resolve, reject) => {
        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
            const fReader = new FileReader();
            const img = document.createElement('img');

            fReader.onload = () => {
                img.src = fReader.result;
                resolve(getBase64Image(img));
            }

            fReader.readAsDataURL(file);
        }else{
            reject(new Error('fail'));
            console.log('not image');
        }
    })
}

// function getImage(file) {
//     return new Promise((resolve, reject) => {
//         const fReader = new FileReader();
//         const img = document.createElement('img');

//         fReader.onload = () => {
//             img.src = fReader.result;
//             resolve(getBase64Image(img));
//         }

//         fReader.readAsDataURL(file);
//     })
// }

function getBase64Image(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    // const dataURL = canvas.toDataURL('image/png');
    const dataURL = img.src;

    return dataURL;
}

export { upload }
