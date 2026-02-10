import React from 'react'

const getPages = (current, total) =>{
    const pages = [];
    if(total <= 5){
        for (let i =1; i <= total; i++){
            pages.push(i)
        }
    
    }
    return pages;
}

const Pagination = ({page, pageHandler, dynamicPage}) => {
  return (
    <div className='mt-10 space-x-4'>
        <button 
        disabled={page===1} 
        className={`${page === 1 ? "bg-red-400":"bg-red-500"} text-white px-3 py-1 rounded-md cursor-pointer`}
        onClick={()=>pageHandler(page - 1)}
        >Prev</button>
        {
            getPages(page, dynamicPage)?.map((item, index) =>{
                return (
                    <span key={index} 
                    onClick={()=> typeof item === "number" && pageHandler(item)}
                    className={`cursor-pointer ${item === page ? "font-bold text-red-600": "text-black"}`}
                    >
                        {item}
                    </span>
                )
            })
        }
        <button 
        disabled={page===dynamicPage} 
        className={`${page === dynamicPage ? "bg-red-400":"bg-red-500"} text-white px-3 py-1 rounded-md cursor-pointer`}
        onClick={()=>pageHandler(page + 1)}
        >Next</button>
    </div>
  )
}

export default Pagination