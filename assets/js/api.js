async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/carloshlc007/portifolio/Api/data/profile.json"
    const fetching = await fetch(url)
    return await fetching.json()
}

