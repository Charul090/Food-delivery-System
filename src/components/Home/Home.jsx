import React, { useState } from 'react'
import Search from './Search/Search'

export default function Home() {
    const [value,setValue]=useState("")
    
    
    return (
        <main>
            <h1>Home</h1>
            <Search setValue={setValue}/>
        </main>
    )
}
