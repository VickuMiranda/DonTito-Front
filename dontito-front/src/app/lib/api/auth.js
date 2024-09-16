import 'server-only'

export async function loginAPI(data){
    const res = await fetch('https://localhost:7183/api/Login/Login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if(!res.ok){
        throw new Error('Failed to fetch data')
    }

    return "Bearer " + res.json()
}

