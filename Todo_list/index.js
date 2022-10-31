let action = prompt("What do you wish to do");

let list_items = [];
while(action!='quit')
{
    if(action=='new') 
    {
        let list_item = prompt("what do you wish to add in the list"); 
        list_items.push(list_item);
        console.log(`${list_item} added to list_items`);
    }
    if(action=='delete')
    {
        let list_item = prompt("what do you wish to delete");
        let i = 0;
        for(;i<list_items.length;i++)
        {
            if(list_items[i]==list_item) 
            {
                break;
            }
        }
        list_items.splice(i,1);
        console.log(`${list_item} deleted from list_items`);
    }
    if(action=='list')
    {
        let k = 0;
        console.log("***********************\n");
        for(let list_item of list_items)
        {
            console.log(`${k} : ${list_item}`);
            k++;
        }
        console.log("***********************\n");
    }
    action = prompt("What do you wish to do");
}

console.log("OK, You Quit the app");