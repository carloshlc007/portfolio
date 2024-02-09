
function updateProfileData(profileData){
    const photo = document.getElementById("profile.photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById("profile.name");
    name.innerText = profileData.name

    const job = document.getElementById("profile.job")
    job.innerText = profileData.job

    const location = document.getElementById("profile.location")
    location.innerText = profileData.location

    const phone = document.getElementById("profile.phone")
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById("profile.email")
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById("profile.skills.softSkills")
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById("profile.skills.hardSkills")
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `
        <li>
            <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
        </li>`).join('')
}

function updatePortifoio(profileData){
    const portfolio = document.getElementById("profile.portfolio")
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
        <li>
            <p ${project.github ? 'class="github"' : project.itchio ? 'class="itchio"' : ''}>${project.name}</p>
            <a href="${project.url}" 
            target="_blank">${project.url}</a>
        </li>`}).join('')
}

function updateProfessionalExerience(profileData){
    const exprience = document.getElementById("profile.professionalExperience")
    exprience.innerHTML = profileData.professionalExperience.map(xp => {
        return `
            <li>
                <h3 class="title">${xp.name}</h3>                      
                    <p class="period">${xp.period}</p>
                    <p>${xp.description}</p>
            </li>`}).join('')
}

(async () =>{
    const profileData = await fetchProfileData()
    updateProfileData(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updatePortifoio(profileData)
    updateProfessionalExerience(profileData)
})()