﻿using Microsoft.EntityFrameworkCore;

namespace RecipeApp.Models
{
    public class RecipeContext : DbContext
    {
        public RecipeContext(DbContextOptions<RecipeContext> options): base(options)
        { 
        }
        public DbSet<Recipe> Recipes { get; set; }
    }
}
