document.addEventListener('DOMContentLoaded', function(){
    const recipes = document.querySelectorAll('.recipe');
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input',function(){
        const searchValue = searchInput.value.toLowerCase();
    recipes.forEach(function(recipe){
        const recipeText =recipe.innerText.toLowerCase();
        if (recipeText.includes(searchValue)){
            recipe.style.display = 'block';
        } else {
            recipe.style.display = 'none'
        }
        });
    });
});
