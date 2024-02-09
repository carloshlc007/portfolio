
function updateProfileData(profileData){
    const photo = document.getElementById("profile.photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const nome = document.getElementById("profile.name")
    const job = document.getElementById("profile.job")
    const location = document.getElementById("profile.location")
    const phone = document.getElementById("profile.phone")
    const email = document.getElementById("profile.email")
}



(async () =>{
    const profileData = await fetchProfileData()
    updateProfileData(profileData)
})()