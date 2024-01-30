//interact with a third party api asynchronously, write a javascript function that uses async/ await to fetch data from the given api endpoint. The function should return an array containing the titles of the first 5 posts. if there is any error in the API, it wi throwan error.

//API endpoint URL
const URL ='https://jsonplaceholder.typicode.com/posts';

//asynchronous function
const fetchUserData = async ()=>{
    try{
        const response = await fetch(URL);  //fetching data

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        const reqData = data.slice(0,5);
        const titles = reqData.map(post => post.title);
        console.log(titles);    //display the titles in the console
    }
    catch(err){
        //handle errors
        console.log(err);
    }
}

//call the function 
fetchUserData();