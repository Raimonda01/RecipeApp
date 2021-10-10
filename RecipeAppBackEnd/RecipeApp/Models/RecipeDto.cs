using System.ComponentModel.DataAnnotations;

namespace RecipeApp.Models
{
    public class RecipeDto
    {
        public int RecipeId { get; set; }
        [Required]
        public string RecipeName { get; set; }
        [Required]
        public string RecipeCategory { get; set; }
        [Required]
        public string RecipeInstructions { get; set; }

    }
}
