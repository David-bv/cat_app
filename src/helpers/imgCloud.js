export const imgCloudUp = async(file) => {
    const cloudUrl = 'https://api.Cloudinary.com/v1_1/david-b/image/upload'
    const formData = new FormData ()
    formData.append('upload_preset', 'cat_App')
    formData.append('file', file)

    const resp = await fetch(cloudUrl, {
        method:'POST',
        body: formData
    })

    const cloudResp = await resp.json()
    return cloudResp.secure_url
}

