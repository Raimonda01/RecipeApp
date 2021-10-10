using RecipeApp.Business;
using System.Collections.Generic;
using System.Linq;

namespace RecipeApp.Models
{
    public class RecipeStoreRepository : IRecipeRepository
    {
        private readonly RecipeContext _context;

        public RecipeStoreRepository(RecipeContext context)
        {
           _context = context;
        }

        public void Create(RecipeDto recipe)
        {
            var newRecipe = new Recipe
            {
                RecipeName = recipe.RecipeName,
                RecipeCategory = recipe.RecipeCategory,
                RecipeInstructions = recipe.RecipeInstructions
            };

            _context.Recipes.Add(newRecipe);
            _context.SaveChanges();
            
        }

        public void Delete(int recipeId)
        {
            var recipe = _context.Recipes.Find(recipeId);

            _context.Recipes.Remove(recipe);
            _context.SaveChanges();
        }

        public IEnumerable<RecipeDto> GetAll()
        {
           var recipes = _context.Recipes.ToList();
           var recipesDto = new List<RecipeDto>();

            foreach (var r in recipes)
            {
                var newRecipe = new RecipeDto
                {
                    RecipeId = r.RecipeId,
                    RecipeName = r.RecipeName,
                    RecipeCategory = r.RecipeCategory,
                    RecipeInstructions = r.RecipeInstructions
                };

                recipesDto.Add(newRecipe);
            }

            return recipesDto;
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public bool Exists(int recipeId)
        {
            return _context.Recipes.Any(x => x.RecipeId == recipeId);

        }
    }
}
