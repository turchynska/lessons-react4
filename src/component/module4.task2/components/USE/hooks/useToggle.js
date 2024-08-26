import { useState } from "react"
export const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState)
    
   
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return { isOpen, open, close };
}
// Власний хук може приймати будь-які аргументи і повертати будь-що, 
// правил немає, залежить від реалізації. У нашому випадку це об'єкт із властивостями.
// Тоді код із попереднього прикладу буде виглядати наступним чино