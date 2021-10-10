using Microsoft.AspNetCore.Mvc;
using RecipeApp.Business;
using RecipeApp.Models;
using System.Collections.Generic;

namespace RecipeApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeRepository _recipeRepository;

        public RecipeController(IRecipeRepository recipeRepository)
        {
            _recipeRepository = recipeRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<RecipeDto>> GetAllRecipies()
        {
            IEnumerable<RecipeDto> recipe = _recipeRepository.GetAll();
            return Ok(recipe);
        }

        [HttpPost(Name = nameof(PostRecipe))]
        public IActionResult PostRecipe([FromBody]RecipeDto recipe)
        {
            if(recipe == null)
            {
                return BadRequest();
            } 

            _recipeRepository.Create(recipe);

            return Ok(recipe);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteRecipe(int id)
        {
            if (!_recipeRepository.Exists(id))
            {
                return NotFound();
            }

            _recipeRepository.Delete(id);

            return Ok(id);
        }






    }
}
