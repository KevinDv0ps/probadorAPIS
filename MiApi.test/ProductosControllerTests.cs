using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using MiApi.Controllers;
using MiApi.Data;
using MiApi.Models;
using Xunit;

public class ProductosControllerTests
{
    private readonly Mock<ILogger<ProductosController>> _mockLogger;
    private readonly Mock<DataContext> _mockContext;
    private readonly ProductosController _controller;

    public ProductosControllerTests()
    {
        _mockLogger = new Mock<ILogger<ProductosController>>();
        _mockContext = new Mock<DataContext>();

        _controller = new ProductosController(_mockLogger.Object, _mockContext.Object);

        
    }

    [Fact]
    public async Task GetProductos_ReturnsListOfProductos()
    {
        // Arrange: Configura la simulación de Productos
        var mockProductos = new List<Producto>
        {
            new Producto { Id = 1, Nombre = "Producto 1" },
            new Producto { Id = 2, Nombre = "Producto 2" }
        }.AsQueryable();

        var mockDbSet = new Mock<DbSet<Producto>>();
        mockDbSet.As<IQueryable<Producto>>().Setup(m => m.Provider).Returns(mockProductos.Provider);
        mockDbSet.As<IQueryable<Producto>>().Setup(m => m.Expression).Returns(mockProductos.Expression);
        mockDbSet.As<IQueryable<Producto>>().Setup(m => m.ElementType).Returns(mockProductos.ElementType);
        mockDbSet.As<IQueryable<Producto>>().Setup(m => m.GetEnumerator()).Returns(mockProductos.GetEnumerator());

        _mockContext.Setup(c => c.Productos).Returns(mockDbSet.Object);

        // Act: Llama al método GetProductos
        var result = await _controller.GetProductos();

        // Assert: Verifica el resultado
        Assert.NotNull(result);
        Assert.IsType<ActionResult<IEnumerable<Producto>>>(result);
    }

}
