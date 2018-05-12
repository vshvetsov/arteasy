using System;
using Microsoft.EntityFrameworkCore;
using Web.DAL.Entities;

namespace Web.DAL
{
	public class ArtEasyContext : DbContext
    {
		public ArtEasyContext(DbContextOptions<ArtEasyContext> options) : 
		base(options)
        {
        }

		public DbSet<TextEntity> Texts { get; set; }
    }
}
