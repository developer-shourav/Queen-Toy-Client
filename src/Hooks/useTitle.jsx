import { useEffect } from "react";


const useTitle = title => {
    useEffect(() => {
     document.title = `Queen Toy | ${title}`;
    }, [title])
}

export default useTitle;