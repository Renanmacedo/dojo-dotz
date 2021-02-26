interface ErrorHandle {

    status: boolean;
    error: {message: string, code: number};
}

interface BookData {
    books: { name: string, title: string, price: number } [];
}


// error example
// type BookDataResponse = BookData | ErrorHandle;

// export function handeResponse(response: BookDataResponse){
    
//     if(response.status)
//         console.log('[ERROR] - ', {...response.error});

//     console.log('[SUCCESS] - ', response.books);
// }

// success use

type BookErrorType = {
    status: "error";
}
type BookLoadingType = {
    status: "loading";
}
type BookSuccessType = {
    status: "success";
    response: { [ key: string] : any };
}


type BookState = 
    BookErrorType
    | BookLoadingType
    | BookSuccessType;

export default (state: BookState) => {

    switch(state.status) {
        case "success":
            console.info('[state]', state.response);
            break;
        case "loading":
            console.info('[loading]', state.status);
            break;
        case "error":
            console.error('[error]', state.status);
            break;
    }
}
