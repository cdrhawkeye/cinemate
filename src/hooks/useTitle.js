import { useEffect } from "react";

export const useTitle = (pageTitle) => {
    useEffect(() => {
        document.title = `Cinemate - ${pageTitle}`;
    }, [pageTitle]);

    return null;
}