import React , {useState} from "react";
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';
import './Articles.css';
import defaultEventImage from '../assets/event-default.png';


const articlesData = [
    {   id: 0,
        title: "Help the helpless",
        imageUrl: defaultEventImage, // Replace with your image URL
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`
    },
    { id: 1, title: 'Help the helpless', imageUrl: defaultEventImage ,
        description: `Sobdjlksfqjlkqjsdfl Manar organise une action dans le thème de la préservation et la protection de
          ces derniers.  dans le thème de la préservation et la protection de
          ces derniers. Sous lSous le nom delkmjqsdkjlfnkjsbnjkqsnjkdvjlkqds<vnjlknwdjklxvlbkjdwhlfqnkljbhvhcsqdlkjvbhjqbsdvkjbqlskbvkqjbvklhbqjklvbqsjkldbvlkjqbvjklbqsiers.`
    },
    { id: 2, title: 'Design Conference', imageUrl: defaultEventImage ,
        description: `So dans le thème de la préservation et la protection de
          ces derniers. Sous lus le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers.  dans le thème de la préservation et la protection de
          ces derniers. Sous lSous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`},
    { id: 3, title: 'Weekend Festival', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.` },
    { id: 4, title: 'Glastonbury Festival', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.` },
    { id: 5, title: 'Ultra Europe 2019', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`},
    { id: 6, title: 'Ultra Europe 2019', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`},
    { id: 7, title: 'Ultra Europe 2019', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`},
    { id: 8, title: 'Ultra Europe 2019', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`},
    { id: 9, title: 'Ultra Europe 2019', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`},
    { id: 10, title: 'Ultra Europe 2019', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`},
    { id: 11, title: 'Ultra Europe 2019', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`},
    { id: 12, title: 'Ultra Europe 2019', imageUrl: defaultEventImage ,
        description: `Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits des animaux,
          le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la protection de
          ces derniers. Sous le nom de "Help the helpless", et à l'occasion de la journée Internationale des droits
          des animaux, le club Rotaract Tunis El Manar organise une action dans le thème de la préservation et la
          protection de ces derniers.`},
    // Add more articles as needed
  ];
  function ArticlesPage() {
    const [currentArticle, setCurrentArticle] = useState(articlesData[0]);
  
    return (
      <div className='ArticlesPage'>
        <ArticleList articles={articlesData} setCurrentArticle={setCurrentArticle} />
        <Article currentArticle={currentArticle} />
      </div>
    );
  }

export default ArticlesPage;
