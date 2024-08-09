
const huong_dan =document.getElementById('huong_dan')
async function getHelp () {
        const data = await getFetch('https://searchgpt247.info/api/guide',undefined,undefined)
        huong_dan.innerHTML = data.data.content
}

getHelp()
