interface ErrorHandle {

    status: boolean;
    error?: {message: string, code: number};
}

interface BookData {
    books?: { name: string, title: string, price: number } [];
}



type BookDataResponse = ErrorHandle & BookData;

export function handeResponse(response: BookDataResponse){
    
    if(response.status)
        console.log('[ERROR] - ', {...response.error});

    console.log('[SUCCESS] - ', response.books);
}