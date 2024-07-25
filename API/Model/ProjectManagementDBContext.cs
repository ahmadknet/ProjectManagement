using Microsoft.EntityFrameworkCore;

namespace API.Models
{
    public class ProjectManagementDBContext : DbContext
    {
        public ProjectManagementDBContext()
        {
        }
        public ProjectManagementDBContext(DbContextOptions<ProjectManagementDBContext> options)
            : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        optionsBuilder.UseSqlServer("SqlConStr");
        //    }
        //}

    }
}