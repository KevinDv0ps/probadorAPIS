
using MiApi.Models;
using Microsoft.EntityFrameworkCore;

namespace MiApi.Data
{
    public class DataContext:DbContext
    {
        public DataContext() { }
        public DataContext (DbContextOptions<DataContext> options)
        : base(options)
        {

        }
        public virtual DbSet<Producto> Productos {get; set;}

    }
}