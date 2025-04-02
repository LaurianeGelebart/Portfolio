const getProjects = async function() {
    const response = await fetch("./data.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.projects
    } else {
        new Error(response.statusText)
    }
} 

const getWhoIam = async function() {
    const response = await fetch("./data.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.aPropos
    } else {
        new Error(response.statusText)
    }
} 

const getFooter = async function() {
    const response = await fetch("./data.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.footer
    } else {
        new Error(response.statusText)
    }
} 

const getAccueil = async function() {
    const response = await fetch("./data.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.accueil
    } else {
        new Error(response.statusText)
    }
} 

const getModels = async function() {
    const response = await fetch("./models.json")
    if (response.status == 200) {
        let data = await response.json()
        return data
    } else {
        new Error(response.statusText)
    }
} 



export { getProjects, getWhoIam, getFooter, getAccueil, getModels}
