import apiservice from "./apiservices";

export const addBookApi=async(reqBody)=>{
      
    return await apiservice('POST','/books',reqBody)

}
export const  getBookByIdAPI = async(bookId)=>{

    return await apiservice("GET",`/books/${bookId}`,{})
}


export const editBookApi=async(bookId,reqBody)=>{
      
    return await apiservice('PUT',`/books/${bookId}`,reqBody)

}



export const  getAllBooksApi = async()=>{

    return await apiservice("GET",`/books`,{})
}

export const  deleteBookApi = async(bookId)=>{

    return await apiservice("DELETE",`/books/${bookId}`,{})
}

