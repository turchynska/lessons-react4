import css from "./SearchForm.module.css"
//неконтрольована форма 
export const SearchForm = ({ onSearch}) => {
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        // Якщо текстове поле порожнє, виводимо повідомлення 
		// і припиняємо виконання функції.
        if(form.elements.topic.value.trim() === ""){
            alert("Please enter search term")
            return;
        }
        // У протилежному випадку викликаємо пропс 
		// і передаємо йому значення поля
        onSearch(topic);
        form.reset();
    };
    return(
        <form onSubmit={handleSubmit} className={css.form}>
            <input 
            type="text" 
            name="topic" 
            placeholder="Search Articles..."
            className={css.input}/>
            <button className={css.btnSearch}>Search</button>
        </form>
    )
}