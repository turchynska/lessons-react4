import { useEffect, useState } from "react";
import axios  from "axios";
import css from "./ArticleList.module.css"

const ArticleList = ({ items }) => (
<ul className={css.item}>
    {items.map(({ objectID, url, title}) =>(
      <li key={objectID} className={css.list}>
        <a href={url} target='_blank' rel='noreferrer noopener'>
        {title} 
        </a>
      </li>
    ))}
    </ul>
)

export default ArticleList;