using RecipeApp.Models;
using System.Collections.Generic;

namespace RecipeApp.Business
{
    public interface IRecipeRepository
    {
        IEnumerable<RecipeDto> GetAll();
        void Create(RecipeDto recipe);
        void Delete(int recipeId);
        void SaveChanges();
        bool Exists(int recipeId);
    }
}
