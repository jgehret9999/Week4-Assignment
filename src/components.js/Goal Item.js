function GoalItem(props) {

    return (
    
    <li>
    
    <article>
    
    <h2></h2>
    
    <p>
    
    
    </p>
    
    </article>
    
    </li>
    
    );
    
    }
    
    

    import GoalItem from './GoalItem';

function GoalList() {

return (

<ul>

<GoalItem First Goal="is to learn more about JavaScript">

Learn as much as I can with this class along with adding the HTML code

</GoalItem>

<GoalItem Second Goal="is to create a website someday">

I designed it a couple semesters ago but there is no code behind it yet

</GoalItem>

<GoalItem ThirdGoal="Is to finish building the website for my dad's business">

Have the code behind dad's website for his business sometime this summer

</GoalItem>

</ul>

);

}

export default GoalList;