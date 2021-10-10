using System.ComponentModel.DataAnnotations;

namespace RecipeApp.Models
{
    public class Recipe
    {
        [Key]
        public int RecipeId { get; set; }
        public string RecipeName { get; set; }
        public string RecipeCategory { get; set; }
        public string RecipeInstructions { get; set; }


    }
}
