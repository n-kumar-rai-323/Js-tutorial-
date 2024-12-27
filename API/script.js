async function getData() {
    const url = "https://dummyjson.com/recipes";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      const {recipes}=json
      console.log(recipes)
    } catch (error) {
      console.error(error.message);
    }
  }
  getData()
