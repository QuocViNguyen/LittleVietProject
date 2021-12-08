import * as React from 'react';
import Drink from './Drink';

function DrinkSection(props)
{
    return ( 
        <div className=' bg-gray-900 w-9/12'>
            <p className='flex text-2xl font-bold bg-yellow-500'>{props.drinkTitle}</p>
            {RenderSubDrinkSection(props.subDrinkList)}
            <br/><br/><br/>
        </div>
     );
}

export default DrinkSection;

function RenderSubDrinkSection(subDrinkList)
{   
    var allSubDrinkSections = [];
    for (let index = 0; index < subDrinkList.length; index++)
    {
        const subDrinkSection = subDrinkList[index];
        const subDrinkComponent = 
            <div key={index}>
                <p className='text-xl font-bold text-yellow-500'>{subDrinkSection.SubType}</p>
                {
                    (subDrinkSection.Drinks !== undefined) ? RenderDrinks(subDrinkSection.Drinks) : null
                }
            </div>;
        allSubDrinkSections.push(subDrinkComponent);
    }
    return allSubDrinkSections;
}

function RenderDrinks(menu)
{
    var allDrink = [];
    for (let index = 0; index < menu.length; index++)
    {
        const drink = menu[index];
        const drinkComponent = <Drink name={drink.Name} price={drink.Price} key={index}/>;
        allDrink.push(drinkComponent);
    }
    return allDrink;
}