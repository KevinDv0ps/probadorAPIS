namespace MiApi.Models
{
    public class Producto
    {
        public int Id {get; set;} //id
        public string Nombre {get; set;} = string.Empty;
        public string Descripcion {get; set;} = string.Empty;
        public decimal Precio {get; set;} 
        public DateTime FechaAlta {get; set;}
        public bool Activo {get; set;}
        
    }
}