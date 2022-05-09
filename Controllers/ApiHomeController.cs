
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using netbooks.Models;

namespace netbooks.Controllers
{
    [Route("BApi")]
    public class ApiHomeController : Controller
    {
        private DataContext context { get; set; }

        public ApiHomeController(DataContext ctx)
        {
            context = ctx;
        }

        [Route("")]
        [Route("/List")]
        public IActionResult List()
        {
            var book = context.Books.First();
            return View("../Api/Index", book);
        }

        [Route("{id?}")]
        [Route("Book/{id?}")]
        [Route("Home/Book/{id?}")]
        public Book Index(long id)
        {
            //System.Threading.Thread.Sleep(5000);
            Book book = null;
            if (id != 0)
            {
                book = context.Books.Find(id);
            }
            else
            {
                book = context.Books.First();
            }
            return book;
        }


    }
}
