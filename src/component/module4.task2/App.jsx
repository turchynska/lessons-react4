import css from './App.module.css';

/*модальне вікно. Сайдбар
import ComponentA from './components/ComponentA/ComponentA';
import ComponentB from './components/ComponentB/ComponentB';
import MyComponent from "./components/MyComponent/MyComponent"

const App = () => {
    return(
        <div className={css.appContainer}>
        <ComponentA/>
        <ComponentB/>
        <MyComponent />
        </div>
    )
}
export default App

*/
/*
import Player  from "../module4.task2/components/Player/Player"
import { useEffect, useRef } from 'react';
import CustomButton from './components/CustomButton/CustomButton';

const App = () =>{
    const btnRef = useRef();
    useEffect(() => btnRef.current.focus(), [])
    return (
        <>
    <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>
    <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
    </>
    )
}
export default App
*/




// import { useMemo, useState } from "react";
// Хук useMemo приймає два аругменти:
// Першим є анонімна функція, яка повертає значення, саме вона буде мемоізована.
// Другим є масив залежностей, при зміні якоїсь з них, викликається функція передана першим аргументом.

// Хук useRef
// React надає властивості current посилання на DOM-елемент коли компонент монтується та undefined 
// при розмонтуванні, тому значення рефа доступне тільки після монтування.
// import { useEffect, useRef, useState } from 'react';
// const App = () => {
    /*
    Рефи це не стан, тобто вони не реактивні, тому зміна значення 
    рефа не впливає на оновлення компонента і не викликає повторний рендер.
    const [ value, setValue] = useState(0);
    const btnRef = useRef();
	Буде undefined на першому рендері
	і посиланням на DOM-елемент всі наступні
    console.log("Api: ", btnRef.current);
    */
// const valueRef = useRef(0)
//     useEffect(() => {
        // Виконається лише один раз під час монтування.
		// Наступні оновлення значення рефа не
		// викличуть оновлення компонента
        // console.log(valueRef.current)
/*
        Ефект виконується після монтування,
		тому завжди буде посиланням на DOM-елемент
        console.log("useEffect: ", btnRef.current)
*/
    // });
    // const handleClick = () => {
    //     valueRef.current += 1;
      /*  Кліки будуть після монтування,
		тому завжди буде посиланням на DOM-елемент
        console.log("handleClick: ", btnRef.current);
        */
//     }
// return <button onClick={handleClick}>Click to update ref value</button>
    // return <button ref={btnRef}>Button with ref</button>
    
//  export default App


// Хук useMemo   
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(
//     () => planets.filter(planet => planet.includes(query)),
//     [planets, query]
//   );


//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>
//         Number of clicks: {clicks}
//       </button>
//       <ul>
//         {filteredPlanets.map(planet => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default App